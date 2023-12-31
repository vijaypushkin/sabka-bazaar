import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.model";
import {
  UserDocument,
  UserDocumentSansID,
} from "common-lib/src/types/users.types";
import { GraphQLError } from "graphql";

// Give a random phrase to generate a secret key
const SECRET_KEY = "a random phrase";
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
    return [null, Error("This email is not registered, please sign up")];
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
    const token = jwt.sign({ user }, SECRET_KEY, {
      expiresIn: "24h",
    });

    return [token, null];
  }

  return [null, Error("Please check your password or email")];
};

const getUserByToken = (token: string): UserDocument | null => {
  const decoded = jwt.verify(token, SECRET_KEY);

  if (!decoded) {
    return null;
  }

  const { user } = decoded as { user: UserDocument };

  return user;
};

const getUser = async (
  parent,
  args,
  context,
  info
): Promise<UserDocument | null> => {
  const user = authGuard(args, context);

  return user;
};

/**
 * @throws GraphQLError
 * @param args
 * @param context
 * @returns
 */
const authGuard = (args, context) => {
  const user = getUserByToken(context.authorization);

  if (!user) {
    throw new GraphQLError("User is not authenticated", {
      extensions: {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      },
    });
  }

  return user;
};

const AuthService = {
  createUser,
  signinUser,
  getUserByToken,
  getUser,
  authGuard,
};

export default AuthService;
