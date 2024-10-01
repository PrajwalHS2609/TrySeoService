import React from "react";
import HomeFaqHead from "../../HomePage/HomeFaq/HomeFaqHead";
import WebsiteAcc from "./WebsiteAcc";
import BlobAnim from "../../HomePage/BlobAnim";

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
        <img
          src="https://seoland.themeht.com/wp-content/uploads/2024/04/03-2.jpg"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default WebsiteFaq;
