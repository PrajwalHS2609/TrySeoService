import React from "react";
import GoogleAdsFaqAcc from "./GoogleAdsFaqAcc";
import HomeFaqHead from "../../HomePage/HomeFaq/HomeFaqHead";
import BlobAnim from "../../HomePage/BlobAnim";
import homeFaq from "./../../../Img/homePgImgs/homeFaq.jpg";

const GoogleAdsFaq = () => {
  return (
    <div className="homeFaq">
      <div className="homeFaqContent1">
        <HomeFaqHead />
        <GoogleAdsFaqAcc />
      </div>
      <div className="homeFaqContent2">
        <div className="homeFaqBlob">
          <BlobAnim />
        </div>
        <img src={homeFaq} alt="homeFaq" loading="lazy" />
      </div>
    </div>
  );
};

export default GoogleAdsFaq;
