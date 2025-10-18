import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import whatsAppVid from "./../../Img/Vid/SEOwhatsapp.mp4";
import "./../HomePage/HomeHeader/HomeHeader.css";
import { FaPhoneAlt } from "react-icons/fa";

const SmsHeader = () => {
  const countryCode =
    localStorage.getItem("preferredCountry")?.toLowerCase() || "";
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="homeContainer" id="seoHeader">
      <div className="blob">
        <video src={whatsAppVid} autoPlay muted loop></video>{" "}
        <div className="homeCover">
          <div className="homeCoverContent1">
            <h1>
              We <span>Bring You Closer</span> to Your Customers{" "}
            </h1>
            <p>
              In the bustling city of Bangalore, where innovation and technology
              converge, businesses are constantly on the lookout for new and
              effective ways to connect with their audience. Enter
              TrySEOServices.com, your digital marketing ally, here to shine a
              light on how our SMS and WhatsApp Marketing Services in Bangalore
              are transforming the way businesses engage, inform, and drive
              growth in this vibrant tech hub.
            </p>
            <div className="homeCoverBtnCover">
              {" "}
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

export default SmsHeader;
