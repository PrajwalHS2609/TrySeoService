import React from "react";
import "./HomePricing.css";
import tick from "./../../../Img/whiteTick.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
const PremiumPlanCard = () => {
  return (
    <div className="premiumPlanCard">
      <div className="premiumTag">
        <h5>Popular</h5>
      </div>
      <h3>Premium</h3>
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
        <img src={tick} alt="tick" /> 10 to 20 Pages
      </li>
      <li>
        <img src={tick} alt="tick" /> Premium Theme
      </li>
      <li>
        <img src={tick} alt="tick" />
        Dynamic Website
      </li>
      <li>
        <img src={tick} alt="tick" />
        CMS/React JS Platform
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
      <FontAwesomeIcon
          icon={faIndianRupeeSign}
          className="pricingIcon"
        ></FontAwesomeIcon>  25000/ <span>only</span>{" "}
      </h2>
      <div className="premiumBtn">
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

export default PremiumPlanCard;
