import React from "react";
import "./NavBar.css";
import TSS from "./../../Img/TSS.png";
import { Link, useLocation } from "react-router-dom";
const Logo = () => {
  const location = useLocation();

  // Get region from current path: /in/... or /us/...
  const basePath = location.pathname.startsWith("/us") ? "/us" : "/in";

  return (
    <div className="logoContainer">
      <Link to={basePath}>
        <img src={TSS} alt="tss" />
      </Link>
    </div>
  );
};

export default Logo;
