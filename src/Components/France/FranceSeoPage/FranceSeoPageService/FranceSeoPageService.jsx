import React from "react";
import {
  faBinoculars,
  faTrafficLight,
  faHandshake,
  faLineChart,
} from "@fortawesome/free-solid-svg-icons";
import FranceSeoPageServiceHead from "./FranceSeoPageServiceHead";
import WebsiteHowItCard from "../../../WebsitePage/WebsiteHowIt/WebsiteHowItCard";
const FranceSeoPageService = () => {
  return (
    <div>
      <FranceSeoPageServiceHead />
      <div className="websiteHowItWrapper">
        <WebsiteHowItCard
          icon={faBinoculars}
          head="Visibility & Rankings"
          classNameIco="howItWorksIco"
          no="01"
          num="howItWorksNo1"
          para="Users typically select from the top five search results when seeking products or services online. SEO services boost your rankings, enhance online visibility, and increase the likelihood that potential customers visit your website and convert into loyal clients."
        />
        <WebsiteHowItCard
          icon={faTrafficLight}
          head="Web Traffic"
          idIco="howItWorksIcoColor"
          no="02"
          num="howItWorksNo2"
          para="SEO drives organic search traffic, increasing daily visits to your website. With more relevant visitors engaging with your content, the likelihood of converting them into customers rises, leading to immediate growth in sales and stronger business performance."
        />
        <WebsiteHowItCard
          icon={faHandshake}
          head="Trustworthy"
          classNameIco="howItWorksIco"
          no="03"
          num="howItWorksNo1"
          para="The higher your website ranks on Google, the stronger your SEO score becomes. Increased visibility not only boosts brand awareness but also builds trust and credibility with potential clients, enhancing your overall online reputation."
        />
        <WebsiteHowItCard
          icon={faLineChart}
          head="Growth"
          idIco="howItWorksIcoColor"
          no="04"
          num="howItWorksNo2"
          para="The higher your website ranks on Google, the stronger your SEO score becomes. Increased visibility not only boosts brand awareness but also builds trust and credibility with potential clients, enhancing your overall online reputation."
        />
      </div>
    </div>
  );
};

export default FranceSeoPageService;
