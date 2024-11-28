import React from "react";
import tick from "./../../../Img/tick.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
const StateSeo = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="basicPlan" id="">
      <h3>State SEO</h3>
      <li>
        <img src={tick} alt="tick" />
        Website SEO Analysis
      </li>
      <li>
        <img src={tick} alt="tick" />
        Competitor Analysis
      </li>
      <li>
        <img src={tick} alt="tick" /> Website Architecture{" "}
      </li>
      <li>
        <img src={tick} alt="tick" /> Keyword Research
      </li>
      <li>
        <img src={tick} alt="tick" />
        Title Optimization
      </li>
      <li>
        <img src={tick} alt="tick" /> Content Optimization
      </li>
      <li>
        <img src={tick} alt="tick" />
        Internal Linking
      </li>
      <li>
        <img src={tick} alt="tick" />
        URL Optimization
      </li>
      <li>
        <img src={tick} alt="tick" />
        Image Optimization
      </li>
      <li>
        <img src={tick} alt="tick" />
        Heading's Optimization{" "}
      </li>
      <li>
        <img src={tick} alt="tick" />
        Error Fixing
      </li>
      <li>
        <img src={tick} alt="tick" /> Google Product's Integration
      </li>
      <li>
        <img src={tick} alt="tick" />
        Search Engine Crawling
      </li>
      <li>
        <img src={tick} alt="tick" /> Website Speed Optimization
      </li>
      <li>
        <img src={tick} alt="tick" /> Google Map Optimization
      </li>
      <li>
        <img src={tick} alt="tick" /> CTA Creation
      </li>
      <li>
        <img src={tick} alt="tick" />
        Content Highlight in SERP
      </li>
      <li>
        <img src={tick} alt="tick" />
        SEO Consultation
      </li>
      <li>
        <img src={tick} alt="tick" />
        100% Guaranteed Result
      </li>
      <li>
        <img src={tick} alt="tick" />
        Keyword's Ranking Report
      </li>
      <li>
        <img src={tick} alt="tick" />
        Call & What's App Support
      </li>
      <h2>
        <FontAwesomeIcon
          icon={faIndianRupeeSign}
          className="pricingIcon"
        ></FontAwesomeIcon>{" "}
        25000 / <span>monthly</span>{" "}
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

export default StateSeo;
