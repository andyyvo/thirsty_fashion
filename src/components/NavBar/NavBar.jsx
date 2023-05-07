import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import Logo from "../../assets/images/thirsty_fashion_logo.png";

/**
 * nav bar will be outside of screen as item located at top of every screen
 * copied and modified from andyyvo-react js components instead of ts
 */

export const NavBar = () => {
  /** logo */
  const NavBarLogo = (
    <div className="navbar-logo">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </div>
  );

  /** menu options */
  const NavBarMenu = (
    <div className="navbar-menu">
      <Link to="/about">
        <Button variant={"link"} color={"black"}><p className="avenir">About</p></Button>
      </Link>
    </div>
  );

  return (
    <div className="navbar">
      {NavBarLogo}
      {NavBarMenu}
    </div>
  );
}