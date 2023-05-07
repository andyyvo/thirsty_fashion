import React from "react";
import { NavBar } from "../NavBar/NavBar";

/**
 * page screen is just a wrapper for all pages so that the nav bar stays on top
 * and that I only need to write it once
 * copied and modified from andyyvo-react js components instead of ts
 * props.snap allows page to have scroll snap css properties
 */

export const PageScreen = (props) => {
  /** classnames */
  const containerClassName = `pagescreen ${props.classname}`;
  const contentClassName = props.snap ? "contentscreen snap" : "contentscreen";

  return (
    <div className={containerClassName}>
      <NavBar />
      <div className={contentClassName}>
        {props.children}
      </div>
    </div>
  );
}