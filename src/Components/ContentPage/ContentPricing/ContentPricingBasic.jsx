import React from "react";
import tick from "./../../../Img/whiteTick.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
const ContentPricingBasic = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
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
        <FontAwesomeIcon
          icon={faIndianRupeeSign}
          className="pricingIcon"
        ></FontAwesomeIcon>{" "}
        0.40 / <span>word</span>{" "}
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

export default ContentPricingBasic;
