import React from "react";
import tick from "./../../../Img/tick.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
const OnPageSeo = () => {
  return (
    <div className="basicPlan" id="">
      <h3>On-Page SEO</h3>
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
        SEO Consultation
      </li>
      <h2>
      <FontAwesomeIcon
          icon={faIndianRupeeSign}
          className="pricingIcon"
        ></FontAwesomeIcon> 10000 / <span>monthly</span>{" "}
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

export default OnPageSeo;
