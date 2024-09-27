import React from "react";
import "./HomePricing.css";
import tick from "./../../../Img/tick.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const BasicPlanCard = () => {
  return (
    <div className="basicPlan">
      <h3>Basic</h3>
      <li>
        <img src={tick} alt="tick" /> Domain*
      </li>
      <li>
        <img src={tick} alt="tick" /> SSD Hosting*
      </li>
      <li>
        <img src={tick} alt="tick" /> SSL Certificate*
      </li>
      <li>
        <img src={tick} alt="tick" /> 1 to 10 Pages
      </li>
      <li>
        <img src={tick} alt="tick" /> Basic Theme
      </li>
      <li>
        <img src={tick} alt="tick" /> Responsive Design
      </li>
      <li>
        <img src={tick} alt="tick" /> HTML Website
      </li>
      <li>
        <img src={tick} alt="tick" /> Image & Video Gallery
      </li>
      <li>
        <img src={tick} alt="tick" /> W3C Validation
      </li>
      <li>
        <img src={tick} alt="tick" /> Basic SEO
      </li>
      <li>
        <img src={tick} alt="tick" /> Social Media Integration
      </li>
      <li>
        <img src={tick} alt="tick" /> Chat Integration
      </li>
      <h2>
        15000/ <span>only</span>{" "}
      </h2>
      <div className="basicBtn" >
        <Link to={"/"}>
          <button>
            Choose Plan{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="homeArrow"
            ></FontAwesomeIcon>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BasicPlanCard;
