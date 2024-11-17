import React from "react";
import "./Lp1Service.css";
import Guarantee from "./../../../../Img/Lp/Guarantee.png";
import Lp1ServiceNavbar from "./Lp1ServiceNavbar";
import servImg1 from "./../../../../Img/Lp/lpService/servicImg1.png";

const Lp1ServiceImgContent = () => {
  return (
    <div className="lp1ServiceImgContent">
      <img src={servImg1} alt="" />
      <img
        src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-s3-img-2.png"
        alt=""
      />
      <img src={Guarantee} alt="" />
      <Lp1ServiceNavbar />
    </div>
  );
};

export default Lp1ServiceImgContent;
