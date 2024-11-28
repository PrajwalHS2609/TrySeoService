import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import emailVid from "./../../Img/Vid/SEOEmailMarketing.mp4";
import "./../HomePage/HomeHeader/HomeHeader.css";

const EmailPageHeader = () => {
  return (
    <div className="homeContainer" id="seoHeader">
      <div className="blob">
        <video src={emailVid} autoPlay muted loop></video>{" "}
        <div className="homeCover">
          <div className="homeCoverContent1">
            <h1>
              We <span>Deliver Your Message</span>, Right on Time{" "}
            </h1>
            <p>
              In today’s digital age, businesses in Bangalore are continually
              seeking innovative ways to connect with their audience, expand
              their reach, and increase brand visibility. Among the various
              digital marketing strategies available, email marketing services
              have proven to be a reliable and effective tool for achieving
              these goals. Let’s explore the significance and impact of email
              marketing services in the vibrant city of Bangalore.
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

export default EmailPageHeader;
