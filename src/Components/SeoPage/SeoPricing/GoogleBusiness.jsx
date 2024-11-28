import React from "react";
import tick from "./../../../Img/whiteTick.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
const GoogleBusiness = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="premiumPlanCard">
      {/* <div className="premiumTag">
        <h5>Popular</h5>
      </div> */}
      <h3>Google My Business</h3>
      <li>
        <img src={tick} alt="tick" /> Business Listing
      </li>
      <li>
        <img src={tick} alt="tick" /> Local Ranking
      </li>
      <li>
        <img src={tick} alt="tick" /> Business Description
      </li>
      <li>
        <img src={tick} alt="tick" />
        Posts
      </li>
      <li>
        <img src={tick} alt="tick" />
        Images & Videos
      </li>
      <li>
        <img src={tick} alt="tick" />
        Product & Services
      </li>
      <li>
        <img src={tick} alt="tick" />
        Reputation Management
      </li>
      <li>
        <img src={tick} alt="tick" /> Q & A
      </li>
      <li>
        <img src={tick} alt="tick" /> Monthly Performance Report
      </li>
      <h2>
        <FontAwesomeIcon
          icon={faIndianRupeeSign}
          className="pricingIcon"
        ></FontAwesomeIcon>{" "}
        5000 / <span>monthly</span>{" "}
      </h2>
      <div className="premiumBtn">
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

export default GoogleBusiness;
