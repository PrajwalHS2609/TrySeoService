import React from "react";
import "./Lp1Service.css";
import Guarantee from "./../../../../Img/Lp/Guarantee.png";
import Lp1ServiceNavbar from "./Lp1ServiceNavbar";
import servImg1 from "./../../../../Img/Lp/lpService/servicImg1.png";
import servImg2 from "./../../../../Img/Lp/lpService/serviceImg2.png";

const Lp1ServiceImgContent = () => {
  return (
    <div className="lp1ServiceImgContent">
      <img src={servImg1} alt="servImg1" loading="lazy"/>
      <img src={servImg2} alt="servImg2" loading="lazy"/>
      <img src={Guarantee} alt="" />
      <Lp1ServiceNavbar />
    </div>
  );
};

export default Lp1ServiceImgContent;
