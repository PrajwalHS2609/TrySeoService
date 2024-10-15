import React from "react";
import socialBanner from "./../../Img/SocialMediaPage/socialMediBanner.png";
import BlobAnim from "../HomePage/BlobAnim";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { NavHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SocialMediaHeader = () => {
  return (
    <div className="homeContainer" id="socialMediaHeader">
      <div className="blob">
        <BlobAnim />
      </div>
      <div className="homeCover">
        <div className="homeCoverContent1">
          <BreadCrumb txt="Social Media " />
          <h1>
            <span> Social Media Marketing </span>Services in Bangalore
          </h1>
          <p>
            In the ever-evolving digital landscape, social media has emerged as
            a powerful tool for businesses to connect with their audience, build
            brand awareness, and drive real results. Bangalore, known as India’s
            Silicon Valley, is at the forefront of this digital revolution. In
            the heart of this tech-savvy city, TrySEOServices.com is your
            trusted partner for navigating the dynamic world of social media
            marketing.
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
          <img src={socialBanner} alt="socialBanner" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaHeader;
