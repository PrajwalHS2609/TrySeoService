import React, { useState } from "react";
import Logo from "../../../NavBar/Logo";
import Lp1Menu from "./Lp1Menu";

const Lp1Navbar = () => {
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
        <Lp1Menu/>
      </div>
    </nav>
  );
};

export default Lp1Navbar;
