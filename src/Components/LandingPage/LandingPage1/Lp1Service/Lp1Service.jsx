import React from "react";
import "./Lp1Service.css";
import Lp1ServiceImgContent from "./Lp1ServiceImgContent";
import Lp1ServiceDisplay from "./Lp1ServiceDisplay";
const Lp1Service = () => {
  return (
    <div className="lp1Service" id="service">
      <div className="lp1ServiceContent">
        <Lp1ServiceImgContent/>
      </div>
      <div className="lp1ServiceContent">
        <Lp1ServiceDisplay/>
      </div>
    </div>
  );
};

export default Lp1Service;
