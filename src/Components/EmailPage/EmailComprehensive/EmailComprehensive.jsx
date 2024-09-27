import React from "react";
import WebsiteBenefitsCard1 from "../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard1";
import WebsiteBenefitsCard2 from "../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard2";
import EmailComprehensiveHead from "./EmailComprehensiveHead";
import {
  faPeopleArrows,
  faEnvelope,
  faEarthAmerica,
  faBullhorn,
  faMobileScreen,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import crafting from "./../../../Img/EmailPage/Crafting.png"
import effective from "./../../../Img/EmailPage/Effective.png"
import segmentation from "./../../../Img/EmailPage/Segmentation.png"
import engaging from "./../../../Img/EmailPage/Engaging.png"
import responsive from "./../../../Img/EmailPage/Responsive-Designs.png"
import optimizing from "./../../../Img/EmailPage/Optimizing.png"

const EmailComprehensive = () => {
  return (
    <div className="websiteBenefits" id="WebsiteBenefits">
      <EmailComprehensiveHead />
      <WebsiteBenefitsCard1
        img={crafting}
        alt="Crafting Personalized Campaigns"
        icon={faPeopleArrows}
        head="Crafting Personalized Campaigns"
        para="Because the top positions on search engine result pages acquire the majority of impressions and clicks, ranking in these positions can result in massive traffic improvements for your website."
        number="01"
      />
      <WebsiteBenefitsCard2
        img={effective}
        alt="Effective Lead Nurturing"
        icon={faEnvelope}
        head="Effective Lead Nurturing"
        para="When it comes to ROI, SEO gives trackable and quantifiable results. Our effective SEO services in Bangalore enable you to monitor almost every aspect of your SEO campaign, including rankings, traffic, and conversions.
"
        number="02"
      />
      <WebsiteBenefitsCard1
        img={segmentation}
        alt="Segmentation for Precision"
        icon={faEarthAmerica}
        head="Segmentation for Precision"
        para="SEO enables you to target customers who are actively looking for your products and services online. It generates more qualified visitors than many other marketing tactics, resulting in cost savings for businesses."
        number="03"
      />
      <WebsiteBenefitsCard2
        img={engaging}
        alt="Engaging Content Creation"
        icon={faBullhorn}
        head="Engaging Content Creation"
        para="SEO optimization services in Bangalore help you to make your website more navigable for visitors while also making it easier to navigate for search engines."
        number="04"
      />
      <WebsiteBenefitsCard1
        img={responsive}
        alt="Responsive Designs"
        icon={faMobileScreen}
        head="Responsive Designs"
        para="As the top position rankings generate considerable impressions, having your website in these top positions on the result pages means more visibility."
        number="05"
      />
      <WebsiteBenefitsCard2
        img={optimizing}
        alt="Optimizing Open Rates and Conversions"
        icon={faDownload}
        head="Optimizing Open Rates and Conversions"
        para="SEO optimization services in Bangalore help you to make your website more navigable for visitors while also making it easier to navigate for search engines."
        number="06"
      />
    </div>
  );
};

export default EmailComprehensive;
