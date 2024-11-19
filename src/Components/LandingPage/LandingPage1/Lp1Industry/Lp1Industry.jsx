import React from "react";
import "./Lp1Industry.css";
import abstractImg from "./../../../../Img/abstract.png";
import Lp1IndustryCard from "./Lp1IndustryCard";
import clinic from "./../../../../Img/Lp/lpIndustry/Clinic.png";
import diagnostics from "./../../../../Img/Lp/lpIndustry/Diagnostics.png";
import hospital from "./../../../../Img/Lp/lpIndustry/Hospital.png";
import petClinic from "./../../../../Img/Lp/lpIndustry/Pet Clinic.png";

const Lp1Industry = () => {
  return (
    <div className="lp1Industry" id="sectors">
      <div className="lp1IndustryContent1">
        <img src={abstractImg} alt="abstractImg" />
      </div>
      <div className="lp1IndustryContent2">
        <h6>WE WORK ON ALL SECTORS</h6>
        <h2>By Empowering Every Small Business</h2>
      </div>
      <div className="lp1IndustryCover">
        <Lp1IndustryCard
          img={clinic}
          alt="clinic"
          head="Clinic"
          para="Enhance your clinic’s visibility and attract patients with tailored SEO strategies. Let’s grow your practice online!"
        />
        <Lp1IndustryCard
          img={hospital}
          alt="hospital"
          head="Hospital"
          para="Elevate your hospital's visibility with tailored SEO, ensuring patients find and trust your services effortlessly."
        />
        <Lp1IndustryCard
          img={diagnostics}
          alt="diagnostics"
          head="Diagnostic"
          para="Boost your diagnostic center’s visibility with tailored SEO to attract patients and optimize local search. Let’s expand your reach!"
        />
        <Lp1IndustryCard
          img={petClinic}
          alt="petClinic"
          head="Pets Clinic"
          para="Increase your pet clinic’s visibility with customized SEO strategies. Attract pet owners, optimize local searches, and grow your online presence effectively!"
        />
      </div>
    </div>
  );
};

export default Lp1Industry;
