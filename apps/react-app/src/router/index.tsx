import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppShell from "../components/layout/AppShell";
import ProtectedRoute from "../components/auth/ProtectedRoute";

const HomePage = React.lazy(() => import("../pages"));
const CategoriesPage = React.lazy(() => import("../pages/categories"));
const CategoriesIDPage = React.lazy(() => import("../pages/categories/[id]"));
const AuthPage = React.lazy(() => import("../pages/auth"));
const CartPage = React.lazy(() => import("../pages/cart"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <div>Something went wrong</div>,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
        errorElement: <div>Something went wrong</div>,
      },
      {
        path: "/categories/:id",
        element: <CategoriesIDPage />,
        errorElement: <div>Something went wrong</div>,
      },
      {
        path: "/auth",
        element: <AuthPage />,
        errorElement: <div>Something went wrong</div>,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
        errorElement: <div>Something went wrong</div>,
      },
    ],
  },
]);

export default router;
