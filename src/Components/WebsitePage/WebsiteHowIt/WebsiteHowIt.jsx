import React from "react";
import "./WebsiteHowIt.css";
import WebsiteHowItHeader from "./WebsiteHowItHeader";
import WebsiteHowItCard from "./WebsiteHowItCard";
import {
  faShieldHalved,
  faComputerMouse,
  faEarthAmerica,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

const WebsiteHowIt = () => {
  return (
    <div className="websiteHowIt">
      <WebsiteHowItHeader />
      <div className="websiteHowItWrapper">
        <WebsiteHowItCard
          icon={faShieldHalved}
          head="A Solid Website"
          classNameIco="howItWorksIco"
          no="01"
          num="howItWorksNo1"
          para="For effective lead generation, you need a functional website. We provide responsive website design in Bangalore, ensuring fast load times and  optimized traffic for quality leads."
        />
        <WebsiteHowItCard
          icon={faEarthAmerica}
          head="Build Trust"
          idIco="howItWorksIcoColor"
          no="02"
          num="howItWorksNo2"
          para="For effective lead generation, you need a functional website. We provide responsive website design in Bangalore, ensuring fast load times and  optimized traffic for quality leads."
        />
        <WebsiteHowItCard
          icon={faComputerMouse}
          head="Usability"
          classNameIco="howItWorksIco"
          no="03"
          num="howItWorksNo1"
          para="For effective lead generation, you need a functional website. We provide responsive website design in Bangalore, ensuring fast load times and  optimized traffic for quality leads."
        />
        <WebsiteHowItCard
          icon={faMobileScreen}
          head="Mobile Design"
          idIco="howItWorksIcoColor"
          no="04"
          num="howItWorksNo2"
          para="For effective lead generation, you need a functional website. We provide responsive website design in Bangalore, ensuring fast load times and  optimized traffic for quality leads."
        />
      </div>
    </div>
  );
};

export default WebsiteHowIt;
