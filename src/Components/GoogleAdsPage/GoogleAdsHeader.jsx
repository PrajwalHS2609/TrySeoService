import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import adsBanner from "./../../Img/Google/AdsBanner.png";
import googleVid from "./../../Img/Vid/SEOGoogleAds.mp4";
import { Link } from "react-router-dom";

const GoogleAdsHeader = () => {
  return (
    <div className="homeContainer" id="seoHeader">
      <div className="blob">
        <video src={googleVid} autoPlay muted loop></video>{" "}
      </div>
      <div className="homeCover">
        <div className="homeCoverContent1">
          <h1>
            We Drive Results with <span>Precision</span>{" "}
          </h1>
          <p>
            We assists you in ranking your company, products, and services on
            the first pages of Google search results. Because search engines
            have become an integral element of the modern consumer’s buying
            process, an increasing number of businesses are opting to invest in
            Google Ads.
          </p>
          <div className="homeCoverBtnCover">
            {" "}
            <NavHashLink to="#pricing">
              <button>
                <h4> Package</h4>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="homeArrow"
                ></FontAwesomeIcon>
              </button>
            </NavHashLink>
            <Link to={"/contact-us"}>
              <button>
                <h4> Contact Us</h4>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="homeArrow"
                ></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div className="homeCoverContent2">
          <img src={adsBanner} alt="adsBanner" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsHeader;
