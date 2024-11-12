import React from "react";
import "./Lp1Service.css";
import Lp1ServiceNavbar from "./Lp1ServiceNavbar";
const Lp1ServiceImgContent = () => {
  return (
    <div className="lp1ServiceImgContent">
      <img
        src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-s3-img-1.png"
        alt=""
      />
      <img
        src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-s3-img-2.png"
        alt=""
      />
      <img
        src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-s3-tams-img.png"
        alt=""
      />
      <Lp1ServiceNavbar/>
    </div>
  );
};

export default Lp1ServiceImgContent;
