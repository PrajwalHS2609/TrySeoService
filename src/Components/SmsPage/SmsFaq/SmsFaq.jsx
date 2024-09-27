import React from "react";
import SmsFaqAcc from "./SmsFaqAcc";
import HomeFaqHead from "../../HomePage/HomeFaq/HomeFaqHead";
import BlobAnim from "../../HomePage/BlobAnim";

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
        <img
          src="https://seoland.themeht.com/wp-content/uploads/2024/04/03-2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SmsFaq;
