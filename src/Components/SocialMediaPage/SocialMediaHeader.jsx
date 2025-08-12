import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import socialVid from "./../../Img/Vid/SEOSocialMedia.mp4";
import "./../HomePage/HomeHeader/HomeHeader.css";

const SocialMediaHeader = () => {
  const countryCode =
    localStorage.getItem("preferredCountry")?.toLowerCase() || "";

  return (
    <div className="homeContainer" id="socialMediaHeader">
      <div className="blob">
        <video src={socialVid} autoPlay muted loop></video>{" "}
        <div className="homeCover">
          <div className="homeCoverContent1">
            <h1>
              We Boost Your <span>Brand Visibility</span>{" "}
            </h1>
            <p>
              In the ever-evolving digital landscape, social media has emerged
              as a powerful tool for businesses to connect with their audience,
              build brand awareness, and drive real results. Bangalore, known as
              India’s Silicon Valley, is at the forefront of this digital
              revolution. In the heart of this tech-savvy city,
              TrySEOServices.com is your trusted partner for navigating the
              dynamic world of social media marketing.
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
              <Link to={`/${countryCode}/contact-us`}>
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
        </div>
      </div>
    </div>
  );
};

export default SocialMediaHeader;
