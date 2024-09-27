import React from "react";
import WebsiteBenefitsCard1 from "../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard1";
import WebsiteBenefitsCard2 from "../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard2";
import traffic from "./../../../Img/SeoPage/Traffic.jpg";
import investment from "./../../../Img/SeoPage/Investment.jpg";
import cost from "./../../../Img/SeoPage/Cost.jpg";
import usability from "./../../../Img/SeoPage/Usability.jpg";
import brand from "./../../../Img/SeoPage/Brand.jpg";

import {
  faMagnifyingGlass,
  faHandshake,
  faEarthAmerica,
  faRectangleAd,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import SeoBenefitsHead from "./SeoBenefitsHead";
const SeoBenefits = () => {
  return (
    <div className="websiteBenefits" id="WebsiteBenefits">
      <SeoBenefitsHead />
      <WebsiteBenefitsCard1
        img={traffic}
        alt="Increased Traffic"
        icon={faMagnifyingGlass}
        head="Increased Traffic"
        para="Because the top positions on search engine result pages acquire the majority of impressions and clicks, ranking in these positions can result in massive traffic improvements for your website."
        number="01"
      />
      <WebsiteBenefitsCard2
        img={investment}
        alt="Return on Investment"
        icon={faHandshake}
        head="Return on Investment"
        para="When it comes to ROI, SEO gives trackable and quantifiable results. Our effective SEO services in Bangalore enable you to monitor almost every aspect of your SEO campaign, including rankings, traffic, and conversions.
"
        number="02"
      />
      <WebsiteBenefitsCard1
        img={cost}
        alt="Cost-effectiveness"
        icon={faEarthAmerica}
        head="Cost-effectiveness"
        para="SEO enables you to target customers who are actively looking for your products and services online. It generates more qualified visitors than many other marketing tactics, resulting in cost savings for businesses."
        number="03"
      />
      <WebsiteBenefitsCard2
        img={usability}
        alt="Increased site usability"
        icon={faRectangleAd}
        head="Increased site usability"
        para="SEO optimization services in Bangalore help you to make your website more navigable for visitors while also making it easier to navigate for search engines."
        number="04"
      />
      <WebsiteBenefitsCard1
        img={brand}
        alt="Brand Awareness"
        icon={faChartBar}
        head="Brand Awareness"
        para="As the top position rankings generate considerable impressions, having your website in these top positions on the result pages means more visibility."
        number="05"
      />
    </div>
  );
};

export default SeoBenefits;
