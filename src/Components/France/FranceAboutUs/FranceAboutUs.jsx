import React from "react";
import FranceAboutUsHeader from "./FranceAboutUsHeader";
import FranceAboutUsWrapper from "./FranceAboutUsWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import homeAboutUs from "./../../../Img/homePgImgs/homeAboutUs.jpg";
import BlobAnim from "../../HomePage/BlobAnim";
const FranceAboutUs = () => {
  return (
    <div className="homeAboutUs">
      <div className="homeAboutUsContent1">
        <div className="blobContain">
          <BlobAnim/>
        </div>
        <img src={homeAboutUs} alt="homeAboutUs" />
      </div>
      <div className="homeAboutUsContent2">
        <FranceAboutUsHeader />
        <FranceAboutUsWrapper />
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

export default FranceAboutUs;
