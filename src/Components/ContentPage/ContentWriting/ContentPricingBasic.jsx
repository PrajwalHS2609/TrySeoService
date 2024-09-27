import React from "react";
import tick from "./../../../Img/whiteTick.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ContentPricingBasic = () => {
  return (
    <div className="premiumPlanCard">
      {/* <div className="premiumTag">
    <h5>Popular</h5>
  </div> */}
      <h3>Content</h3>
      <li>
        <img src={tick} alt="tick" /> 100% Unique Content
      </li>
      <li>
        <img src={tick} alt="tick" /> Min - 500 Words
      </li>
      <li>
        <img src={tick} alt="tick" />
        Website/Promotion Content
      </li>
      <li>
        <img src={tick} alt="tick" />
        Product/Service Content
      </li>
      <li>
        <img src={tick} alt="tick" />
        Content Guidelines
      </li>
      <li>
        <img src={tick} alt="tick" />
        Catchy Headings
      </li>
      <li>
        <img src={tick} alt="tick" />
        Deliver in Word Doc, PDF & TXT File
      </li>
      <li>
        <img src={tick} alt="tick" /> Call & WhatsApp Support
      </li>
      <h2>
        0.40 / <span>word</span>{" "}
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

export default ContentPricingBasic;
