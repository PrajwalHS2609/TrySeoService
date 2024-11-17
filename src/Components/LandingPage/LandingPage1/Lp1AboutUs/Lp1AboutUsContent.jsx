import React from "react";
import "./Lp1AboutUs.css";
const Lp1AboutUsContent = () => {
  return (
    <div className="lp1AboutUsContent">
      <h6>ABOUT US</h6>
      <h2>Our Journey Through the Marketing Landscape</h2>
      <p>
        At TrySEOServices.Com, we are a dedicated team of six SEO experts with
        over 10 years of experience. Having successfully optimized 50+ websites
        across diverse industries, we specialize in delivering tailored
        strategies to boost your online presence and drive results. Your growth
        is our mission!
      </p>
      <div className="lp1AboutUsContentList">
        <li>
          <img
            src="https://kfkit.rometheme.pro/beevo/wp-content/uploads/sites/79/2024/01/Icon-1.png"
            alt=""
          />{" "}
          <div className="lp1AboutUsContentList-Content">
            <h4>Proven Track Record</h4>
          </div>
        </li>
        <li>
          <img
            src="https://kfkit.rometheme.pro/beevo/wp-content/uploads/sites/79/2024/01/Icon-2.png"
            alt=""
          />{" "}
          <div className="lp1AboutUsContentList-Content">
            <h4>Tailored Strategies</h4>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Lp1AboutUsContent;
