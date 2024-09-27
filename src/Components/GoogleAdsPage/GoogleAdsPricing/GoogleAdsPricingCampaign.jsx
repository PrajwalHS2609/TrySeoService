import React from 'react'
import tick from "./../../../Img/whiteTick.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const GoogleAdsPricingCampaign = () => {
  return (
    <div className="premiumPlanCard">
    {/* <div className="premiumTag">
    <h5>Popular</h5>
  </div> */}
    <h3>Campaign Set Up</h3>
    <li>
      <img src={tick} alt="tick" /> One Time Set Up
    </li>
    <li>
      <img src={tick} alt="tick" /> Keyword Research
    </li>
    <li>
      <img src={tick} alt="tick" />
      Banner Ads
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
      Ad Copy Design
    </li>
    <li>
      <img src={tick} alt="tick" />
      CTA Creation
    </li>
    <li>
      <img src={tick} alt="tick" /> Google Products Integration
    </li>
    <li>
      <img src={tick} alt="tick" /> Google Ad's Consultation
    </li>
    <li>
      <img src={tick} alt="tick" /> Monthly Performance Report
    </li>
   
    <h2>
      15000 / <span>only</span>{" "}
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
  )
}

export default GoogleAdsPricingCampaign
