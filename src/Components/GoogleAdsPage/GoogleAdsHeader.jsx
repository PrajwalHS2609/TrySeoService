import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import googleVid from "./../../Img/Vid/SEOGoogleAds.mp4";
import { Link } from "react-router-dom";
import "./../HomePage/HomeHeader/HomeHeader.css";
import { FaPhoneAlt } from "react-icons/fa";

const GoogleAdsHeader = () => {
  const countryCode =
    localStorage.getItem("preferredCountry")?.toLowerCase() || "";
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="homeContainer" id="seoHeader">
      <div className="blob">
        <video src={googleVid} autoPlay muted loop></video>{" "}
        <div className="homeCover">
          <div className="homeCoverContent1">
            <h1>
              We Drive Results with <span>Precision</span>{" "}
            </h1>
            <p>
              We assists you in ranking your company, products, and services on
              the first pages of Google search results. Because search engines
              have become an integral element of the modern consumer’s buying
              process, an increasing number of businesses are opting to invest
              in Google Ads.
            </p>
            <div className="homeCoverBtnCover">
              {" "}
              <NavHashLink to="#pricing">
                <button class="cssbuttons-io-button" onClick={handlePopUp}>
                  Get Started
                  <div class="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </NavHashLink>
              <Link to={`/${countryCode}/contact-us`}>
                <button class="cssbuttons-io-button">
                  Contact Us
                  <div class="icon">
                    <FaPhoneAlt className="headerContact-icon" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsHeader;
