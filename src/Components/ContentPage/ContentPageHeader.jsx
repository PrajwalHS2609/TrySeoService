import React from "react";
import BlobAnim from "../HomePage/BlobAnim";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { NavHashLink } from "react-router-hash-link";
import websiteBanner from "./../../Img/WebsitePage/websiteBanner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ContentPageHeader = () => {
  return (
    <div className="homeContainer" id="contentHeader">
      <div className="blob">
        <BlobAnim />
      </div>
      <div className="homeCover">
        <div className="homeCoverContent1">
          <BreadCrumb txt="Content Writing" />
          <h1>
            Are you looking for the best <span>Content Writing </span>services
            in Bangalore?{" "}
          </h1>
          <p>
            Content is rightly regarded as the king of the marketing industry,
            as it is the only factor that contributes to the development of a
            strong online persona on search engines.
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

export default ContentPageHeader;
