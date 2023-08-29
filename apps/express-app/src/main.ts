import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import pkg from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";

import typeDefs from "./graphql/typeDef";
import resolvers from "./graphql/resolvers";
import path from "path";
import AuthController from "./controller/auth.controller";

const host = process.env.HOST ?? "localhost";
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express(); // * Mongoose # start
const mongodbUrl = process.env.MONGODB_CONNECTION_STRING ?? "";

mongoose.connect(mongodbUrl);

mongoose.connection.on("error", (err) => {
  console.log("Failed to connect to MongoDB");
  console.error(err);
  process.exit(1);
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
// * Mongoose # end

// * Apollo Server # start
const server = new ApolloServer({ typeDefs, resolvers });

await server.start();
// * Apollo Server # end

app.get("/", (req, res) => {
  res.send({ message: "Hello API" });
});

app.post("/api/auth/sign-in", AuthController.handleSignIn);
app.post("/api/auth/sign-up", AuthController.handleSignUp);

// * Static Files # start
const staticFilesPath = path.join(
  import.meta.url.split("/").slice(1, -2).join("/"),
  "public"
);

app.use("/static", express.static(staticFilesPath));
// * Static Files # end

// * Express Middleware # start
app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  pkg.json(),
  expressMiddleware(server)
);
// * Express Middleware # end

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
