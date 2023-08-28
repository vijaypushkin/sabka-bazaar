import React from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = React.lazy(() => import("../pages"));
const CategoriesPage = React.lazy(() => import("../pages/categories"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
]);

export default router;
