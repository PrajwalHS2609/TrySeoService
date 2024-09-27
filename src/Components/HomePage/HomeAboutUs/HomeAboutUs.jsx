import React from "react";
import "./HomeAboutUs.css";
import BlobAnim from "./../BlobAnim";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import HomeAboutUsWrapper from "./HomeAboutUsWrapper";
import HomeAboutUsHeader from "./HomeAboutUsHeader";
const HomeAboutUs = () => {
  return (
    <div className="homeAboutUs">
      <div className="homeAboutUsContent1">
        <div className="blobContain">
          <BlobAnim />
        </div>
        <img
          src="https://seoland.themeht.com/wp-content/uploads/2024/04/01-2.jpg"
          alt=""
        />
      </div>
      <div className="homeAboutUsContent2">
        <HomeAboutUsHeader/>
        <HomeAboutUsWrapper />
        <Link to={"/"}>
          <button>
            Discover More{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="homeArrow"
            ></FontAwesomeIcon>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeAboutUs;
