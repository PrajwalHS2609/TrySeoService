import React from "react";
import "./WebsiteHeader.css";
import BlobAnim from "../../HomePage/BlobAnim";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import websiteBanner from "./../../../Img/WebsitePage/websiteBanner.png";
import { NavHashLink } from "react-router-hash-link";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
const WebsiteHeader = () => {
  return (
    <div className="homeContainer" id="websiteHeader">
      <div className="blob">
        <BlobAnim />
      </div>
      <div className="homeCover">
        <div className="homeCoverContent1">
          <BreadCrumb txt="Website" />
          <h1>
            <span> Website Designing</span> services in Bangalore
          </h1>
          <p>
            For High Quality Traffic, Qualified Leads, Online Sales, Maximum
            Reach, & Search Ranking.
          </p>
          <NavHashLink to="#Packages">
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
          <img src={websiteBanner} alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default WebsiteHeader;
