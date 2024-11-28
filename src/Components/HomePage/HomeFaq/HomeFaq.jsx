import React from "react";
import "./HomeFaq.css";
import HomeFaqHead from "./HomeFaqHead";
import BlobAnim from "../BlobAnim";
import HomeFaqAcc from "./HomeFaqAcc";
import homeFaq from "./../../../Img/homePgImgs/homeFaq.jpg"
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
          src={homeFaq}
          alt="homeFaq"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HomeFaq;
