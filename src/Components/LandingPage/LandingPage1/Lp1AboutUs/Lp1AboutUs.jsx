import React from "react";
import "./Lp1AboutUs.css";
import Lp1AboutUsContent from "./Lp1AboutUsContent";
import lp1AboutImg1 from "./../../../../Img/Lp/aboutUsImg/aboutUsImg1.jpg"
import lp1AboutImg2 from "./../../../../Img/Lp/aboutUsImg/aboutUsImg2.jpg"

const Lp1AboutUs = () => {
  return (
    <div className="lp1AboutUs" id="about-us">
      <div className="lp1AboutUsWrapper">
        <div className="lp1AboutUsItem">
          <img
            src={lp1AboutImg1}
            alt="" loading="lazy"
          />
          <img
            src={lp1AboutImg2}
            alt="" loading="lazy"
          />
        </div>
      </div>
      <div className="lp1AboutUsWrapper">
        <Lp1AboutUsContent />
      </div>
    </div>
  );
};

export default Lp1AboutUs;
