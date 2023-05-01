import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";

export const router = createBrowserRouter([
  /** home root */
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);
