import React from "react";
import "./HomePricing.css";
import tick from "./../../../Img/tick.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
const EcommercePlanCard = () => {
  return (
    <div className="basicPlan" id="EcommercePlanCard">
      <h3>e-Commerce</h3>
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
        <img src={tick} alt="tick" /> 20 to 50 Pages
      </li>
      <li>
        <img src={tick} alt="tick" /> Premium Theme
      </li>
      <li>
        <img src={tick} alt="tick" />
        Dynamic/eCommerce Website
      </li>
      <li>
        <img src={tick} alt="tick" />
        Responsive Design
      </li>
      <li>
        <img src={tick} alt="tick" />
        React JS, & eCommerce Platform{" "}
      </li>
      <li>
        <img src={tick} alt="tick" /> Image & Video Gallery
      </li>
      <li>
        <img src={tick} alt="tick" /> W3C Validation
      </li>
      <li>
        <img src={tick} alt="tick" /> Advanced SEO
      </li>
      <li>
        <img src={tick} alt="tick" /> Social Media Integration
      </li>
      <li>
        <img src={tick} alt="tick" /> Chat/Whats App Integration
      </li>
      <h2>
      <FontAwesomeIcon
          icon={faIndianRupeeSign}
          className="pricingIcon"
        ></FontAwesomeIcon>  50000/ <span>only</span>{" "}
      </h2>
      <div className="basicBtn">
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

export default EcommercePlanCard;
