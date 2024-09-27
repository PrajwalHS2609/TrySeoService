import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import websiteBanner from "./../../Img/WebsitePage/websiteBanner.png";
import BlobAnim from "../HomePage/BlobAnim";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
const PaymentHeader = () => {
  return (
    <div className="homeContainer" id="seoHeader">
      <div className="blob">
        <BlobAnim />
      </div>
      <div className="homeCover">
        <div className="homeCoverContent1">
          <BreadCrumb txt="Google Ads" />
          <h1>
            Are you looking for the <span>Payment Gateway</span> Services in
            Bangalore?{" "}
          </h1>
          <p>
            Look no further! Our payment gateway solutions are tailored to meet
            your business needs, ensuring secure and seamless transactions.
            Trust us for a smooth payment experience.
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

export default PaymentHeader;
