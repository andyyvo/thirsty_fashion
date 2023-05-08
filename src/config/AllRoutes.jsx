import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";
import { AboutPage } from "../pages/AboutPage";
import { InfoPage1 } from "../pages/InfoPage1";
import { InfoPage2 } from "../pages/InfoPage2";
import { InfoPage3 } from "../pages/InfoPage3";

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
  },
  {
    path: "/info1",
    element: <InfoPage1 />
  },
  {
    path: "/info2",
    element: <InfoPage2 />
  },
  {
    path: "/info3",
    element: <InfoPage3 />
  }
]);
