import React from "react";
import { NavBar } from "../NavBar/NavBar";

/**
 * page screen is just a wrapper for all pages so that the nav bar stays on top
 * and that I only need to write it once
 * copied and modified from andyyvo-react js components instead of ts
 */

export const PageScreen = (props) => {
  const classname = `pagescreen ${props.classname}`;

  return (
    <div className={classname}>
      <NavBar />
      <div className="contentscreen">
        {props.children}
      </div>
    </div>
  );
}