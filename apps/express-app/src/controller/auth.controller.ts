import { Request, Response } from "express";
import AuthService from "../services/auth.service";

const handleSignUp = async (req: Request, res: Response) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    res.status(400).send({ message: "Passwords do not match" });
    return;
  }

  const [data, error] = await AuthService.createUser({ name, email, password });

  if (error) {
    return res.status(500).send({
      data: null,
      error: error,
    });
  }

  res.status(201).send({
    data,
  });
};

const handleSignIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const [token, error] = await AuthService.signinUser({ email, password });

  if (error) {
    return res.status(500).send({
      data: null,
      error: error,
    });
  }

  res.status(201).send({
    data: {
      token,
    },
  });
};

const AuthController = {
  handleSignUp,
  handleSignIn,
};

export default AuthController;
