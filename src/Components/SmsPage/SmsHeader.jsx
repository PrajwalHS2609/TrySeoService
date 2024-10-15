import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import BlobAnim from "../HomePage/BlobAnim";
import whatsappBanner from "./../../Img/WhatsApp/whatsAppBanner.png";
import { Link } from "react-router-dom";

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
          <img src={whatsappBanner} alt="whatsappBanner" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default SmsHeader;
