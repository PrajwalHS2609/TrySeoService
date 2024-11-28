import React from "react";
import HomeFaqHead from "../../HomePage/HomeFaq/HomeFaqHead";
import WebsiteAcc from "./WebsiteAcc";
import BlobAnim from "../../HomePage/BlobAnim";
import homeFaq from "./../../../Img/homePgImgs/homeFaq.jpg";

const WebsiteFaq = () => {
  return (
    <div className="homeFaq">
      <div className="homeFaqContent1">
        <HomeFaqHead />
        <WebsiteAcc />
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

export default WebsiteFaq;
