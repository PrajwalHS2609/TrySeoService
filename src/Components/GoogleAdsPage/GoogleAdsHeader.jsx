import React from "react";
import BlobAnim from "../HomePage/BlobAnim";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { NavHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import adsBanner from "./../../Img/Google/AdsBanner.png";
const GoogleAdsHeader = () => {
  return (
    <div className="homeContainer" id="seoHeader">
      <div className="blob">
        <BlobAnim />
      </div>
      <div className="homeCover">
        <div className="homeCoverContent1">
          <BreadCrumb txt="Google Ads" />
          <h1>
            <span> Google Ads</span> Specialist in Bangalore
          </h1>
          <p>
            We assists you in ranking your company, products, and services on
            the first pages of Google search results. Because search engines
            have become an integral element of the modern consumer’s buying
            process, an increasing number of businesses are opting to invest in
            Google Ads.
          </p>
          <NavHashLink to="#pricing">
            <button>
              <h4> Package</h4>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="homeArrow"
              ></FontAwesomeIcon>
            </button>
          </NavHashLink>
        </div>
        <div className="homeCoverContent2">
          <img src={adsBanner} alt="adsBanner" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsHeader;
