import React from "react";
import "./HomeWhatWe.css";
import BlobAnim from "../BlobAnim";
import HomeWhatWeHeader from "./HomeWhatWeHeader";
const HomeWhatWe = () => {
  return (
    <div className="homeWhatWeContainer">
      <div className="homeWhatWeContent1">
        <HomeWhatWeHeader/>
      </div>
      <div className="homeWhatWeContent2">
      <div className="blobContain">
          <BlobAnim />
        </div>
        <img
          src="https://seoland.themeht.com/wp-content/uploads/2024/04/03-2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeWhatWe;
