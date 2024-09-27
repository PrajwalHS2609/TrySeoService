import React from "react";
import GoogleAdsBenefitsHead from "./GoogleAdsBenefitsHead";
import WebsiteBenefitsCard1 from "../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard1";
import WebsiteBenefitsCard2 from "../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard2";
import boostBrand from "./../../../Img/Google/boostbrand.jpg";
import gmail from "./../../../Img/Google/gmailinbox.jpg";
import reconnect from "./../../../Img/Google/reconnect.jpg";
import remarketing from "./../../../Img/Google/remarketing.jpg";
import measure from "./../../../Img/Google/measure.jpg";

import {
  faPeopleArrows,
  faEnvelope,
  faEarthAmerica,
  faBullhorn,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
const GoogleAdsBenefits = () => {
  return (
    <div className="websiteBenefits" id="WebsiteBenefits">
      <GoogleAdsBenefitsHead />
      <WebsiteBenefitsCard1
        img={boostBrand}
        alt="Boost Brand Awareness"
        icon={faPeopleArrows}
        head="Boost Brand Awareness"
        para="Because the top positions on search engine result pages acquire the majority of impressions and clicks, ranking in these positions can result in massive traffic improvements for your website."
        number="01"
      />
      <WebsiteBenefitsCard2
        img={gmail}
        alt="Reach Greater Client through their Gmail Inbox"
        icon={faEnvelope}
        head="Reach Greater Client through their Gmail Inbox"
        para="When it comes to ROI, SEO gives trackable and quantifiable results. Our effective SEO services in Bangalore enable you to monitor almost every aspect of your SEO campaign, including rankings, traffic, and conversions."
        number="02"
      />
      <WebsiteBenefitsCard1
        img={reconnect}
        alt="Reconnect with Site Visitors of your Website"
        icon={faEarthAmerica}
        head="Reconnect with Site Visitors of your Website"
        para="SEO enables you to target customers who are actively looking for your products and services online. It generates more qualified visitors than many other marketing tactics, resulting in cost savings for businesses."
        number="03"
      />
      <WebsiteBenefitsCard2
        img={remarketing}
        alt="Remarketing on the Show Network"
        icon={faBullhorn}
        head="Remarketing on the Show Network"
        para="SEO optimization services in Bangalore help you to make your website more navigable for visitors while also making it easier to navigate for search engines."
        number="04"
      />
      <WebsiteBenefitsCard1
        img={measure}
        alt="Measure your overall performance Consistently"
        icon={faChartBar}
        head="Measure your overall performance Consistently"
        para="As the top position rankings generate considerable impressions, having your website in these top positions on the result pages means more visibility."
        number="05"
      />
    </div>
  );
};

export default GoogleAdsBenefits;
