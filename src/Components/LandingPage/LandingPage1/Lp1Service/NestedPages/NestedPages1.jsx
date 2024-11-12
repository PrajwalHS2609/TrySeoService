import React from "react";
import "./../Lp1Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faClock,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const NestedPages1 = () => {
  return (
    <div className="nestedPages1">
      <h2>Complete Site Speed Optimization Services</h2>
      <p>
        We are 100+ professional software engineers with more 10 years of
        experience in delivering superior product
      </p>
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faLightbulb}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>
          <div className="nestedPgContent">
            <h4>SEO Analytics</h4>
            <p>the easiest way to improve yur site speed</p>
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faClock}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>{" "}
          <div className="nestedPgContent">
            <h4>Creative Advertising</h4>
            <p>instantly analyze your SEO issues</p>
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChartLine}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>{" "}
          <div className="nestedPgContent">
            <h4>Email Marketing</h4>
            <p>instantly analyze your SEO issues</p>
          </div>
        </li>
      </ul>
      <Link to={"/"}>
        {" "}
        <button>Learn More</button>
      </Link>
    </div>
  );
};

export default NestedPages1;
