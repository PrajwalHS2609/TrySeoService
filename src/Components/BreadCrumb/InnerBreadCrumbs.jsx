import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
const InnerBreadCrumbs = (props) => {
  const location = useLocation();
  
    // Get region from current path: /in/... or /us/...
    const supportedCountries = [
      "/in",
      "/us",
      "/ca",
      "/uk",
      "/au",
      "/de",
      "/fr",
      "/jp",
    ];
    const currentPath = location.pathname.toLowerCase();
    const basePath =    supportedCountries.find((path) => currentPath.startsWith(path)) || "/";
  
  return (
    <div className="breadCrumb">
      <h6>
        {" "}
        <Link to={basePath}>
          {" "}
          <FontAwesomeIcon
            icon={faHouse}
            className="contactHouse"
          ></FontAwesomeIcon>
          Home
        </Link>{" "}
        /
        <span>
          <Link to="/blog">{props.txt}</Link>
        </span>
      </h6>
    </div>
  );
};

export default InnerBreadCrumbs;
