import React from "react";
import LpMedicalMenu from "./LpMedicalMenu";
import LpMedicalLogo from "./LpMedicalLogo";
import "./LpMedicalNavbar.css";

const LpMedicalNavbar = () => {
  return (
    <div className="navBarContainer">
      <div className="navBarWrapper">
        <LpMedicalLogo />
        <LpMedicalMenu />
      </div>
    </div>
  );
};

export default LpMedicalNavbar;
