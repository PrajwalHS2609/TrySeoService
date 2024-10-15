import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import paymentBanner from "./../../Img/PaymentPage/paymentBanner.png";
import BlobAnim from "../HomePage/BlobAnim";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
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
          <img src={paymentBanner} alt="paymentBanner" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default PaymentHeader;
