import React from "react";
import BlobAnim from "../../HomePage/BlobAnim";
import FranceWhatHeader from "./FranceWhatHeader";
import homeWhatWe from "./../../../Img/homePgImgs/homeWhatWeDo.jpg";

const FranceWhat = () => {
  return (
    <div className="homeWhatWeContainer">
      <div className="homeWhatWeContent1">
        <FranceWhatHeader />
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

export default FranceWhat;
