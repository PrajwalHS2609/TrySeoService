import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import paymentVid from "./../../Img/Vid/SEOPaymentGateway.mp4";
import "./../HomePage/HomeHeader/HomeHeader.css";
import { FaPhoneAlt } from "react-icons/fa";

const PaymentHeader = () => {
  const countryCode =
    localStorage.getItem("preferredCountry")?.toLowerCase() || "";
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="homeContainer" id="seoHeader">
      <div className="blob">
        <video src={paymentVid} autoPlay muted loop></video>{" "}
        <div className="homeCover">
          <div className="homeCoverContent1">
            <h1>
              We Simplify Your <span>Payments</span>
            </h1>
            <p>
              Look no further! Our payment gateway solutions are tailored to
              meet your business needs, ensuring secure and seamless
              transactions. Trust us for a smooth payment experience.
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

export default PaymentHeader;
