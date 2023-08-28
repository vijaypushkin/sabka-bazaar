import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import router from "./router";
import client from "./utils/apollo-client";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </MantineProvider>
  );
}

export default App;
