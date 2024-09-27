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
          para="Users are more likely to choose one of the top five choices available by a search engine while looking for a service or product online. SEO services in Bangalore help you rank higher in search results and gain greater online visibility, increasing the chances that potential customers will visit your site and convert."
        />
        <WebsiteHowItCard
          icon={faTrafficLight}
          head="Web Traffic"
          idIco="howItWorksIcoColor"
          no="02"
          num="howItWorksNo2"
          para="SEO enhances organic search engine traffic, which boosts the number of daily visits to your page. Because the more relevant people that visit your site, the more probable you are to offer to them, you will see an increase in sales immediately."
        />
        <WebsiteHowItCard
          icon={faHandshake}
          head="Trustworthy"
          classNameIco="howItWorksIco"
          no="03"
          num="howItWorksNo1"
          para="The higher you rank on search engines like Google, the better your SEO score is. The improved visibility from higher Google ranks is great to each brand, the trust you develop with potential clients is a secondary advantages."
        />
        <WebsiteHowItCard
          icon={faLineChart}
          head="Growth"
          idIco="howItWorksIcoColor"
          no="04"
          num="howItWorksNo2"
          para="The importance of SEO in the development of your brand cannot be overstated. A well-optimized website has a higher chance of attracting new visitors and increasing sales. Our SEO services in Bangalore share your brand across other social platforms like Facebook or Instagram."
        />
      </div>
    </div>
  );
};

export default SeoService;
