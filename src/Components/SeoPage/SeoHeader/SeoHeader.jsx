import React from "react";
import seoVid from "./../../../Img/Vid/SEO-banner.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavHashLink } from "react-router-hash-link";
import seoBanner from "./../../../Img/SeoPage/seoBanner.png";
import { Link } from "react-router-dom";

const SeoHeader = () => {
  return (
    <div className="homeContainer" id="seoHeader">
      <div className="blob">
        <video src={seoVid} autoPlay muted loop></video>{" "}
      </div>
      <div className="homeCover">
        <div className="homeCoverContent1">
          <h1>
            We <span>Optimize</span> Your Growth
          </h1>
          <p>
            Our SEO experts have great innovative, responsive, and analytical
            skills that are all required to develop that one large plan that
            provides results-based performance marketing solutions
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
        <div className="homeCoverContent2">
          <img src={seoBanner} alt="seoBanner" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default SeoHeader;
