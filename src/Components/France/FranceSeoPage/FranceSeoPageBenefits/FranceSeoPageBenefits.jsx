import React from "react";
import {
  faMagnifyingGlass,
  faHandshake,
  faEarthAmerica,
  faRectangleAd,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import traffic from "./../../../../Img/SeoPage/Traffic.jpg";
import investment from "./../../../../Img/SeoPage/Investment.jpg";
import cost from "./../../../../Img/SeoPage/Cost.jpg";
import usability from "./../../../../Img/SeoPage/Usability.jpg";
import brand from "./../../../../Img/SeoPage/Brand.jpg";
import FranceSeoPageBenefitsHead from "./FranceSeoPageBenefitsHead";
import WebsiteBenefitsCard1 from "../../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard1";
import WebsiteBenefitsCard2 from "../../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard2";
const FranceSeoPageBenefits = () => {
  return (
    <div className="websiteBenefits" id="WebsiteBenefits">
      <FranceSeoPageBenefitsHead />
      <WebsiteBenefitsCard1
        img={traffic}
        alt="Increased Traffic"
        icon={faMagnifyingGlass}
        head="Increased Traffic"
        para="Securing top positions on search engine results pages means capturing most of the clicks and impressions. Higher rankings drive a surge of quality traffic to your website, boosting visibility and business growth."
        number="01"
      />
      <WebsiteBenefitsCard2
        img={investment}
        alt="Return on Investment"
        icon={faHandshake}
        head="Return on Investment"
        para="When it comes to ROI, SEO drives measurable success. Our result-oriented SEO services empower you to monitor every metric—rankings, traffic, and conversions—providing full transparency and fueling consistent, data-backed business growth."
        number="02"
      />
      <WebsiteBenefitsCard1
        img={cost}
        alt="Cost-effectiveness"
        icon={faEarthAmerica}
        head="Cost-effectiveness"
        para="SEO helps you reach customers actively searching for your products or services online. By attracting highly qualified visitors, it delivers better results than most marketing methods—maximizing impact while reducing overall business costs."
        number="03"
      />
      <WebsiteBenefitsCard2
        img={usability}
        alt="Increased site usability"
        icon={faRectangleAd}
        head="Increased site usability"
        para="SEO optimization services enhance your website’s structure, making it seamless for visitors to explore and effortless for search engines to crawl—boosting both user experience and online visibility."
        number="04"
      />
      <WebsiteBenefitsCard1
        img={brand}
        alt="Brand Awareness"
        icon={faChartBar}
        head="Brand Awareness"
        para="Ranking at the top of search results captures the most attention and clicks. Securing these prime positions boosts your website’s visibility, credibility, and potential to attract high-quality leads."
        number="05"
      />
    </div>
  );
};

export default FranceSeoPageBenefits;
