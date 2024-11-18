import React from "react";
import "./Lp1AboutUs.css";
import Lp1Why from "../Lp1Why/Lp1Why";
const Lp1AboutUsContent = () => {
  return (
    <div className="lp1AboutUsContent">
      <h6>ABOUT US</h6>
      <h2>Expect Great Things From Your SEO agency</h2>
      <p>
        At TrySEOServices.Com, we are a dedicated team of six SEO experts with
        over 10 years of experience. Having successfully optimized 50+ websites
        across diverse industries, we specialize in delivering tailored
        strategies to boost your online presence and drive results. Your growth
        is our mission!
      </p>
      <div className="lp1AboutUsContentList">
        <Lp1Why />
      </div>
    </div>
  );
};

export default Lp1AboutUsContent;
