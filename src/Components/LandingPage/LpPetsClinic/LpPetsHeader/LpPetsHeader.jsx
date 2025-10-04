import React from "react";
import "./LpPetsHeader.css";
import { FaPhoneAlt } from "react-icons/fa";
import arrow from "./../../../../Img/curveArrow.png";
const LpPetsHeader = () => {
  return (
    <div className="lpPetsHeader-container">
      <div className="lpPetsHeader-wrapper">
        <div className="lpPetsHeader-content">
          <h2>Let Pet Owners Find YOU First on Google!</h2>
          <p>
            Turn your pet clinic into the top choice for local pet owners! With
            powerful SEO and Google My Business optimization, we’ll put your
            clinic on the map. Attract more walk-ins, increase trust, and see
            guaranteed results in just 30 days — backed by our 100% ROI promise.
          </p>
        </div>
        <div className="lpPetsHeader-content">
          <div className="lpPetsHeader-logoContainer">
            <div className="lpPetsHeader-logo">
              <img
                src="https://html.favdevs.com/aximo/assets/images/v1/user1.png"
                alt=""
              />
            </div>
            <div className="lpPetsHeader-logo">
              <img
                src="https://html.favdevs.com/aximo/assets/images/v1/user1.png"
                alt=""
              />
            </div>
            <div className="lpPetsHeader-logo">
              <img
                src="https://html.favdevs.com/aximo/assets/images/v1/user1.png"
                alt=""
              />
            </div>
          </div>
          <p>Believed by more than a thousand people</p>
        </div>
        <div className="lpPetsHeader-content">
          <div className="lpPetsHeader-item">
            <button>
              Book a free consultation
              <span>
                <FaPhoneAlt className="lpPetsHeader-icon" />
              </span>
            </button>
          </div>
          <div className="lpPetsHeader-item">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="lpPetsHeader-wrapper">
        <div className="lpPetsHeader-imgContainer">
          <img
            src="https://html.favdevs.com/aximo/assets/images/v1/hero-thumb.png"
            alt="headerImg"
          />
        </div>
      </div>
    </div>
  );
};

export default LpPetsHeader;
