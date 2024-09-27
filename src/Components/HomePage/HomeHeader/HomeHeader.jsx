import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BlobAnim from './../BlobAnim';
import "./HomeHeader.css"
const HomeHeader = () => {
  return (
    <div className="homeContainer">
      <div className="blob">
        <BlobAnim />
      </div>
      <div className="homeCover">
        <div className="homeCoverContent1">
          <h6>
            Welcome To
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
          <Link to={"/"}>
            <button>
              <h4> Get Started</h4>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="homeArrow"
              ></FontAwesomeIcon>
            </button>
          </Link>
        </div>
        <div className="homeCoverContent2">
          <img
            src="https://seoland.themeht.com/wp-content/uploads/2024/04/01-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
