import React from "react";
import "./BreadCrumb.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const BreadCrumb = (props) => {
  return (
    <div className="breadCrumb">
      <h6>
        {" "}
        <Link to={"/"}>
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
