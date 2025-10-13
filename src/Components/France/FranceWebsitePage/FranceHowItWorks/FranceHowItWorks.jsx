import React from "react";
import {
  faShieldHalved,
  faComputerMouse,
  faEarthAmerica,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import WebsiteHowItCard from "../../../WebsitePage/WebsiteHowIt/WebsiteHowItCard";
import FranceHowItWorksHead from "./FranceHowItWorksHead";
const FranceHowItWorks = () => {
  return (
    <div className="websiteHowIt">
      <FranceHowItWorksHead />
      <div className="websiteHowItWrapper">
        <WebsiteHowItCard
          icon={faShieldHalved}
          head="A Solid Website"
          classNameIco="howItWorksIco"
          no="01"
          num="howItWorksNo1"
          para="The foundation of an effective lead generation strategy begins with a website that truly performs. We create responsive, fast-loading, and strategically designed websites that attract the right audience and drive the quality traffic you need to convert leads into loyal customers."
        />
        <WebsiteHowItCard
          icon={faEarthAmerica}
          head="Build Trust"
          idIco="howItWorksIcoColor"
          no="02"
          num="howItWorksNo2"
          para="A professionally developed website helps visitors, even those not yet ready to buy, recognize your business as credible, trustworthy, and authoritative in its industry, reinforcing your brand’s legitimacy and building confidence that encourages future engagement and conversions."
        />
        <WebsiteHowItCard
          icon={faComputerMouse}
          head="Usability"
          classNameIco="howItWorksIco"
          no="03"
          num="howItWorksNo1"
          para="We provide web design services that make it easy for visitors to navigate your site, access key information, complete inquiry forms, explore product details, and engage seamlessly with your content for an intuitive and user-friendly browsing experience."
        />
        <WebsiteHowItCard
          icon={faMobileScreen}
          head="Mobile Design"
          idIco="howItWorksIcoColor"
          no="04"
          num="howItWorksNo2"
          para="Our website development ensures an exceptional mobile experience, catering to users who are often in decision-making mode. Unlike desktops, mobile browsing is ideal for quick actions, enabling visitors to engage, explore, and convert efficiently while on the go."
        />
      </div>
    </div>
  );
};

export default FranceHowItWorks;
