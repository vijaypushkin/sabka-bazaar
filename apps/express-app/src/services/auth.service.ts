import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.model";
import {
  UserDocument,
  UserDocumentSansID,
} from "common-lib/src/types/users.types";

const createUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}): Promise<[{ user: UserDocument; token: string }, null] | [null, Error]> => {
  const user = await User.create<UserDocumentSansID>({
    name,
    email,
    password,
  });

  const [token, tokenError] = getJWTToken({ user, password });

  if (tokenError) {
    return [null, tokenError];
  }

  return [{ user, token }, null];
};

const signinUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<[string, null] | [null, Error]> => {
  const user = await User.findOne({
    email,
  });

  if (!user) {
    return [null, Error("User not found")];
  }

  const [token, tokenError] = getJWTToken({ user, password });

  if (tokenError) {
    return [null, tokenError];
  }

  return [token, null];
};

const getJWTToken = ({
  user,
  password,
}: {
  user: UserDocument;
  password: string;
}): [string, null] | [null, Error] => {
  if (!user) {
    return [null, Error("User not found")];
  }

  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ user }, "yourSecretKey", {
      expiresIn: "24h",
    });

    return [token, null];
  }

  return [null, Error("Password mismatch")];
};

const AuthService = {
  createUser,
  signinUser,
};

export default AuthService;
