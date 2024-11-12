import React from "react";
import "./Lp1Industry.css";
import abstractImg from "./../../../../Img/abstract.png";
import Lp1IndustryCard from "./Lp1IndustryCard";
const Lp1Industry = () => {
  return (
    <div className="lp1Industry" id="sectors">
      <div className="lp1IndustryContent1">
        <img src={abstractImg} alt="abstractImg" />
      </div>
      <div className="lp1IndustryContent2">
        <h6>WE WORK ON ALL SECTORS</h6>
        <h2>From startups to giants of the industry</h2>
      </div>
      <div className="lp1IndustryCover">
        <Lp1IndustryCard head="Clinic"/>
        <Lp1IndustryCard head="Hospital"/>
        <Lp1IndustryCard head="Diagnostic"/>
        <Lp1IndustryCard head="Veterinary Clinic"/>
      </div>
    </div>
  );
};

export default Lp1Industry;
