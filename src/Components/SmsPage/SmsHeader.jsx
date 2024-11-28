import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import whatsAppVid from "./../../Img/Vid/SEOwhatsapp.mp4";
import "./../HomePage/HomeHeader/HomeHeader.css";

const SmsHeader = () => {
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
        </div>
      </div>
    </div>
  );
};

export default SmsHeader;
