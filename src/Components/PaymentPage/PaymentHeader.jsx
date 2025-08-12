import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import paymentVid from "./../../Img/Vid/SEOPaymentGateway.mp4";
import "./../HomePage/HomeHeader/HomeHeader.css";

const PaymentHeader = () => {
  const countryCode =
    localStorage.getItem("preferredCountry")?.toLowerCase() || "";

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
  );
};

export default PaymentHeader;
