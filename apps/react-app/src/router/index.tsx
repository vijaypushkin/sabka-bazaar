import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppShell from "../components/layout/AppShell";

const HomePage = React.lazy(() => import("../pages"));
const CategoriesPage = React.lazy(() => import("../pages/categories"));

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
        element: <div>Category</div>,
        errorElement: <div>Something went wrong</div>,
      },
    ],
  },
]);

export default router;
