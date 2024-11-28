import React from "react";
import "./WebsiteHeader.css";
import "./../../HomePage/HomeHeader/HomeHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavHashLink } from "react-router-hash-link";
import websiteVid from "./../../../Img/Vid/SEOWebsiteDesign.mp4";
import { Link } from "react-router-dom";

const WebsiteHeader = () => {
  return (
    <div className="homeContainer" id="websiteHeader">
      <div className="blob">
        <video src={websiteVid} autoPlay muted loop></video>{" "}
        <div className="homeCover">
          <div className="homeCoverContent1">
            <h1>
              We Craft Your <span>Digital</span> Presence
            </h1>
            <p>
              For High Quality Traffic, Qualified Leads, Online Sales, Maximum
              Reach, & Search Ranking.
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
    </div>
  );
};

export default WebsiteHeader;
