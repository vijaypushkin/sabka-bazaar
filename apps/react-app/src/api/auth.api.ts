import { SignInFormValues, SignUpFormValues } from "common-lib/types";

const BACKEND_URL = `http://localhost:5500/api`;

const createUser = async (formValues: SignUpFormValues) => {
  try {
    const res = await fetch(`${BACKEND_URL}/auth/sign-up`, {
      // mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    if (!res.ok) {
      return [null, res.statusText];
    }

    const data = await res.json();

    return [data, null];
  } catch (err: any) {
    return [null, err?.message];
  }
};

const signInUser = async (formValues: SignInFormValues) => {
  try {
    const res = await fetch(`${BACKEND_URL}/auth/sign-in`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    if (!res.ok) {
      return [null, res.statusText];
    }

    const data = await res.json();

    return [data, null];
  } catch (err: any) {
    return [null, err?.message];
  }
};

const AuthAPI = {
  createUser,
  signInUser,
};

export default AuthAPI;
