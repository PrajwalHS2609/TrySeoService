import React from "react";
import SeoServiceHead from "./SeoServiceHead";
import WebsiteHowItCard from "../../WebsitePage/WebsiteHowIt/WebsiteHowItCard";
import {
  faBinoculars,
  faTrafficLight,
  faHandshake,
  faLineChart,
} from "@fortawesome/free-solid-svg-icons";
const SeoService = () => {
  return (
    <div>
      <SeoServiceHead />
      <div className="websiteHowItWrapper">
        <WebsiteHowItCard
          icon={faBinoculars}
          head="Visibility & Rankings"
          classNameIco="howItWorksIco"
          no="01"
          num="howItWorksNo1"
          para="For effective lead generation, you need a functional website. We provide responsive website design in Bangalore, ensuring fast load times and  optimized traffic for quality leads."
        />
        <WebsiteHowItCard
          icon={faTrafficLight}
          head="Web Traffic"
          idIco="howItWorksIcoColor"
          no="02"
          num="howItWorksNo2"
          para="For effective lead generation, you need a functional website. We provide responsive website design in Bangalore, ensuring fast load times and  optimized traffic for quality leads."
        />
        <WebsiteHowItCard
          icon={faHandshake}
          head="Trustworthy"
          classNameIco="howItWorksIco"
          no="03"
          num="howItWorksNo1"
          para="For effective lead generation, you need a functional website. We provide responsive website design in Bangalore, ensuring fast load times and  optimized traffic for quality leads."
        />
        <WebsiteHowItCard
          icon={faLineChart}
          head="Growth"
          idIco="howItWorksIcoColor"
          no="04"
          num="howItWorksNo2"
          para="For effective lead generation, you need a functional website. We provide responsive website design in Bangalore, ensuring fast load times and  optimized traffic for quality leads."
        />
      </div>
    </div>
  );
};

export default SeoService;
