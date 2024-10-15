import React from "react";
import BlobAnim from "../HomePage/BlobAnim";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import emailBanner from "./../../Img/EmailPage/emailBanner.png";
import { Link } from "react-router-dom";

const EmailPageHeader = () => {
  return (
    <div className="homeContainer" id="seoHeader">
      <div className="blob">
        <BlobAnim />
      </div>
      <div className="homeCover">
        <div className="homeCoverContent1">
          <BreadCrumb txt="Google Ads" />
          <h1>
            <span>Email Marketing </span>Services in Bangalore
          </h1>
          <p>
            In today’s digital age, businesses in Bangalore are continually
            seeking innovative ways to connect with their audience, expand their
            reach, and increase brand visibility. Among the various digital
            marketing strategies available, email marketing services have proven
            to be a reliable and effective tool for achieving these goals. Let’s
            explore the significance and impact of email marketing services in
            the vibrant city of Bangalore.
          </p>
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
        <div className="homeCoverContent2">
          <img src={emailBanner} alt="emailBanner" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default EmailPageHeader;
