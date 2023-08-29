import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const jwt = useAuth();

  if (jwt) {
    return props.children;
  }

  return <Navigate to="/auth" />;
};

export default ProtectedRoute;
