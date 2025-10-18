import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import contentVid from "./../../Img/Vid/SEOContentWriting.mp4";
import { Link } from "react-router-dom";
import "./../HomePage/HomeHeader/HomeHeader.css";
import { FaPhoneAlt } from "react-icons/fa";

const ContentPageHeader = () => {
  const countryCode =
    localStorage.getItem("preferredCountry")?.toLowerCase() || "";
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="homeContainer" id="contentHeader">
      <div className="blob">
        <video src={contentVid} autoPlay muted loop></video>{" "}
        <div className="homeCover">
          <div className="homeCoverContent1">
            <h1>
              We <span>Tell Your Story</span>, Your Way
            </h1>
            <p>
              Content is rightly regarded as the king of the marketing industry,
              as it is the only factor that contributes to the development of a
              strong online persona on search engines.
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

export default ContentPageHeader;
