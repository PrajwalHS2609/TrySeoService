import React from "react";
import "./SeoHeader.css";
import BlobAnim from "../../HomePage/BlobAnim";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavHashLink } from "react-router-hash-link";
import websiteBanner from "./../../../Img/WebsitePage/websiteBanner.png";

const SeoHeader = () => {
  return (
    <div className="homeContainer" id="seoHeader">
      <div className="blob">
        <BlobAnim />
      </div>
      <div className="homeCover">
        <div className="homeCoverContent1">
          <BreadCrumb txt="SEO" />
          <h1>
            <span> SEO </span>Services in Bangalore
          </h1>
          <p>
            Our SEO experts have great innovative, responsive, and analytical
            skills that are all required to develop that one large plan that
            provides results-based performance marketing solutions
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
          <img src={websiteBanner} alt="websiteBanner" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default SeoHeader;
