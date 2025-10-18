import React from "react";
import "./HomeAboutUs.css";
import BlobAnim from "./../BlobAnim";
import HomeAboutUsWrapper from "./HomeAboutUsWrapper";
import HomeAboutUsHeader from "./HomeAboutUsHeader";
import homeAboutUs from "./../../../Img/homePgImgs/homeAboutUs.jpg";
const HomeAboutUs = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="homeAboutUs">
      <div className="homeAboutUsContent1">
        <div className="blobContain">
          <BlobAnim />
        </div>
        <img src={homeAboutUs} alt="homeAboutUs" />
      </div>
      <div className="homeAboutUsContent2">
        <HomeAboutUsHeader />
        <HomeAboutUsWrapper />
        <button class="cssbuttons-io-button" onClick={handlePopUp}>
          Book Now
          <div class="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomeAboutUs;
