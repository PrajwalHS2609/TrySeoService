import React from "react";
import "./BreadCrumb.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
const BreadCrumb = (props) => {
    const location = useLocation();
  
    const supportedCountries = ["/in", "/us", "/ca", "/uk", "/au", "/de", "/fr", "/jp"];
  const currentPath = location.pathname.toLowerCase();
  const basePath = supportedCountries.find(path => currentPath.startsWith(path)) || "/";
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
        /<span>{props.txt}</span>
      </h6>
    </div>
  );
};

export default BreadCrumb;
