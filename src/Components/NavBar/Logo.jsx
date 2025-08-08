import React from "react";
import "./NavBar.css";
import TSS from "./../../Img/TSS.png";
import { Link, useLocation } from "react-router-dom";
const Logo = () => {
  const location = useLocation();

  // Get region from current path: /in/... or /us/...
  const supportedCountries = ["/in", "/us", "/ca", "/uk", "/au", "/de", "/fr", "/jp"];
  const currentPath = location.pathname.toLowerCase();
  const basePath = supportedCountries.find(path => currentPath.startsWith(path)) || "/";
  return (
    <div className="logoContainer">
      <Link to={basePath}>
        <img src={TSS} alt="tss" />
      </Link>
    </div>
  );
};

export default Logo;
