import React, { useState } from "react";
import SignUpForm from "../../components/auth/SignUpForm";
import SignInForm from "../../components/auth/SignInForm";

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  if (isSignUp) {
    return <SignUpForm onSignInClick={() => setIsSignUp(false)} />;
  }

  return <SignInForm onSignUpClick={() => setIsSignUp(true)} />;
};

export default AuthPage;
