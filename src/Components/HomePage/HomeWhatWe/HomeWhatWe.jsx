import React from "react";
import "./HomeWhatWe.css";
import BlobAnim from "../BlobAnim";
import HomeWhatWeHeader from "./HomeWhatWeHeader";
import homeWhatWe from "./../../../Img/homePgImgs/homeWhatWeDo.jpg";
const HomeWhatWe = () => {
  return (
    <div className="homeWhatWeContainer">
      <div className="homeWhatWeContent1">
        <HomeWhatWeHeader />
      </div>
      <div className="homeWhatWeContent2">
        <div className="blobContain">
          <BlobAnim />
        </div>
        <img src={homeWhatWe} alt="homeWhatWe" />
      </div>
    </div>
  );
};

export default HomeWhatWe;
