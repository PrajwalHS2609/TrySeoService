import React from "react";
import "./HomeFaq.css";
import HomeFaqHead from "./HomeFaqHead";
import BlobAnim from "../BlobAnim";
import HomeFaqAcc from "./HomeFaqAcc";
const HomeFaq = () => {
  return (
    <div className="homeFaq">
      <div className="homeFaqContent1">
        <HomeFaqHead />
        <HomeFaqAcc/>
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

export default HomeFaq;
