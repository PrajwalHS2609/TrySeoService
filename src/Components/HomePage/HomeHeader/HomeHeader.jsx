import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./HomeHeader.css";
import homeVid from "./../../../Img/Vid/Banners - home.mp4";
import { NavHashLink } from "react-router-hash-link";

const HomeHeader = () => {
  return (
    <div className="homeContainer">
      <div className="blob">
        <video src={homeVid} autoPlay muted loop></video>{" "}
        <div className="homeCover">
          <div className="homeCoverContent1">
            <h6>
              Hire Us Now!
              <li id="list1"></li>
              <li id="list2"></li>
              <li id="list3"></li>
              <li id="list4"></li>
            </h6>
            <h1>
              Digital Marketing Services for <br />
              <span>Small Business</span>
            </h1>
            <p>
              For High Quality Traffic, Qualified Leads, Online Sales, Maximum
              Reach, & Search Ranking.
            </p>
            <div className="homeCoverBtnCover">
              {" "}
              <NavHashLink to="#pricing">
                <button>
                  <h4> Get Started</h4>
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

export default HomeHeader;
