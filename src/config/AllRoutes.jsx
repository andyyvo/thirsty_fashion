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
    path: "/thirsty_fashion",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/thirsty_fashion/about",
    element: <AboutPage />,
  },
  {
    path: "/thirsty_fashion/info1",
    element: <InfoPage1 />
  },
  {
    path: "/thirsty_fashion/info2",
    element: <InfoPage2 />
  },
  {
    path: "/thirsty_fashion/info3",
    element: <InfoPage3 />
  }
]);
