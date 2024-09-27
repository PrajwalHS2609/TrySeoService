import React from "react";
import tick from "./../../../Img/whiteTick.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const CampaignPlan = () => {
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
        <img src={tick} alt="tick" /> Ad Spend
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
        CTA Creation
      </li>
      <li>
        <img src={tick} alt="tick" />
        Conversion Tracking
      </li>
      <li>
        <img src={tick} alt="tick" />
        Re-Targeting
      </li>
      <li>
        <img src={tick} alt="tick" /> Database Marketing
      </li>
      <li>
        <img src={tick} alt="tick" /> Social Media Analytics
      </li>
      <li>
        <img src={tick} alt="tick" /> Traffic Monitoring
      </li>
      <li>
        <img src={tick} alt="tick" /> Marketing Consultation
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
  );
};

export default CampaignPlan;
