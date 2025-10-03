import React from "react";
import LpPetsLogo from "./LpPetsLogo";
import LpPetsMenu from "./LpPetsMenu";
import "./LpPetsNavbar.css"
const LpPetsNavbar = () => {
  return (
    <div className="LpPetsNavbar-container">
      <LpPetsLogo />
      <LpPetsMenu />
    </div>
  );
};

export default LpPetsNavbar;
