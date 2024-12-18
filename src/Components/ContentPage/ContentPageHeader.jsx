import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import contentVid from "./../../Img/Vid/SEOContentWriting.mp4";
import { Link } from "react-router-dom";
import "./../HomePage/HomeHeader/HomeHeader.css";

const ContentPageHeader = () => {
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

export default ContentPageHeader;
