import React from "react";
import "./NavBar.css";
import TSS from "./../../Img/TSS.png";
import { Link } from "react-router-dom";
const Logo = () => {
  const countryCode =    localStorage.getItem("preferredCountry")?.toLowerCase() || "";

  return (
    <div className="logoContainer">
      <Link to={`/${countryCode}`}>
        <img src={TSS} alt="tss" />
      </Link>
    </div>
  );
};

export default Logo;
