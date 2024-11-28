import React from "react";
import tick from "./../../../Img/tick.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
const EcommercePlan = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="basicPlan">
      {/* <div className="premiumTag">
    <h5>Popular</h5>
  </div> */}
      <h3>e-Commerce Ad Campaign </h3>
      <li>
        <img src={tick} alt="tick" /> Campaign Set Up
      </li>
      <li>
        <img src={tick} alt="tick" />
        Competitor Analysis
      </li>
      <li>
        <img src={tick} alt="tick" />
        Ad Spend
      </li>
      <li>
        <img src={tick} alt="tick" />
        Campaign Design
      </li>
      <li>
        <img src={tick} alt="tick" />
        Ad Copy Design
      </li>
      <li>
        <img src={tick} alt="tick" />
        Image & Video Ad's
      </li>
      <li>
        <img src={tick} alt="tick" />
        Landing Page Analysis
      </li>
      <li>
        <img src={tick} alt="tick" />
        Conversion Tracking
      </li>
      <li>
        <img src={tick} alt="tick" />
        Conversion Optimization
      </li>
      <li>
        <img src={tick} alt="tick" />
        Daily Campaign Monitoring
      </li>
      <li>
        <img src={tick} alt="tick" />
        Ad Copy Design
      </li>
      <li>
        <img src={tick} alt="tick" />
        CTA Creation
      </li>
      <li>
        <img src={tick} alt="tick" />
        A/B Testing
      </li>
      <li>
        <img src={tick} alt="tick" />
        Re-Targeting
      </li>
      <li>
        <img src={tick} alt="tick" /> Bid Management
      </li>
      <li>
        <img src={tick} alt="tick" /> Products Catalogue Creation
      </li>
      <li>
        <img src={tick} alt="tick" /> Marketing Consultation
      </li>
      <li>
        <img src={tick} alt="tick" /> 100% Guaranteed ROI
      </li>{" "}
      <li>
        <img src={tick} alt="tick" /> Weekly Performance Report
      </li>{" "}
      <li>
        <img src={tick} alt="tick" />
        Call & What's App Support
      </li>
      <h2>
        <FontAwesomeIcon
          icon={faIndianRupeeSign}
          className="pricingIcon"
        ></FontAwesomeIcon>{" "}
        30000 / <span>monthly</span>{" "}
      </h2>
      <div className="basicBtn">
        <button onClick={handlePopUp}>
          Choose Plan{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="homeArrow"
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default EcommercePlan;
