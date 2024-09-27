import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import BlobAnim from "../HomePage/BlobAnim";
import websiteBanner from "./../../Img/WebsitePage/websiteBanner.png";

const SmsHeader = () => {
  return (
    <div className="homeContainer" id="seoHeader">
      <div className="blob">
        <BlobAnim />
      </div>
      <div className="homeCover">
        <div className="homeCoverContent1">
          <BreadCrumb txt="SMS & WhatsApp" />
          <h1>
            <span>SMS & What'sApp Marketing</span> Services in Bangalore
          </h1>
          <p>
            In the bustling city of Bangalore, where innovation and technology
            converge, businesses are constantly on the lookout for new and
            effective ways to connect with their audience. Enter
            TrySEOServices.com, your digital marketing ally, here to shine a
            light on how our SMS and WhatsApp Marketing Services in Bangalore
            are transforming the way businesses engage, inform, and drive growth
            in this vibrant tech hub.
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

export default SmsHeader;
