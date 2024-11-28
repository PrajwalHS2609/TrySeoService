import React from "react";
import SmsFaqAcc from "./SmsFaqAcc";
import HomeFaqHead from "../../HomePage/HomeFaq/HomeFaqHead";
import BlobAnim from "../../HomePage/BlobAnim";
import homeFaq from "./../../../Img/homePgImgs/homeFaq.jpg";

const SmsFaq = () => {
  return (
    <div className="homeFaq">
      <div className="homeFaqContent1">
        <HomeFaqHead />
        <SmsFaqAcc />
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

export default SmsFaq;
