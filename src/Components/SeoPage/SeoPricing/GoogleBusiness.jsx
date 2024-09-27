import React from "react";
import tick from "./../../../Img/whiteTick.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const GoogleBusiness = () => {
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
        5000 / <span>monthly</span>{" "}
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

export default GoogleBusiness;
