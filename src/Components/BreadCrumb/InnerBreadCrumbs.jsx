import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const InnerBreadCrumbs = (props) => {
const countryCode =
    localStorage.getItem("preferredCountry")?.toLowerCase() || "";

  
  return (
    <div className="breadCrumb">
      <h6>
        {" "}
        <Link to={`/${countryCode}`}>
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
