import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";
import { AboutPage } from "../pages/AboutPage";

export const router = createBrowserRouter([
  /** home root */
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  }
]);
