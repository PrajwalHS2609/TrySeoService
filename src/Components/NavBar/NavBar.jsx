import React, { useState } from "react";
import "./NavBar.css";
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
  let [scroll, setScroll] = useState(false);

  let changeColor = () => {
    if (window.scrollY >= 90) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <nav className={scroll ? "navbarContainer" : "navbarContainer1"}>
      <div className="navbarContent">
        <Logo />
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
