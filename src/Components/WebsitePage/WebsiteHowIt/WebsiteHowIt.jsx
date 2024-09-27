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
          para="The initial step to a lead generation website is a website that actually works. We provide website designing in Bangalore that is responsive, open in quick time, & gets the amount of traffic you require to convert quality leads."
        />
        <WebsiteHowItCard
          icon={faEarthAmerica}
          head="Build Trust"
          idIco="howItWorksIcoColor"
          no="02"
          num="howItWorksNo2"
          para="The website development in Bangalore exhibits visitors to your site (people who are nowhere near making a purchasing decision) that you are a legitimate company with authority in your industry."
        />
        <WebsiteHowItCard
          icon={faComputerMouse}
          head="Usability"
          classNameIco="howItWorksIco"
          no="03"
          num="howItWorksNo1"
          para="We offer a web design service in Bangalore that enables the audience to find information on your website by clicking on navigational links, filling out inquiry forms, zooming in on details of product images, & more."
        />
        <WebsiteHowItCard
          icon={faMobileScreen}
          head="Mobile Design"
          idIco="howItWorksIcoColor"
          no="04"
          num="howItWorksNo2"
          para="Our website development in Bangalore allows mobile users a top-flight experience. When mobile users access the Internet, they are more likely to be in decision mode than research mode, since research is more conveniently undertaken on a desktop, where different browser windows and documents can be seen same time."
        />
      </div>
    </div>
  );
};

export default WebsiteHowIt;
