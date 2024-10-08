import React from "react";
import PaymentFactorHead from "./PaymentFactorHead";
import {
  faShieldHalved,
  faCreditCard,
  faEarthAmerica,
  faIndianRupeeSign,
  faHeadphonesSimple,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import WebsiteBenefitsCard1 from "../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard1";
import WebsiteBenefitsCard2 from "../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard2";
import security from "./../../../Img/PaymentPage/Security.png";
import fees from "./../../../Img/PaymentPage/Transaction-Fees.png";
import integration from "./../../../Img/PaymentPage/Pyament-Integration.png";
import payment from "./../../../Img/PaymentPage/Pyament-Options.png";
import customer from "./../../../Img/PaymentPage/Customer-Support.png";
import scalability from "./../../../Img/PaymentPage/Scalability.png";

const PaymentFactor = () => {
  return (
    <div className="websiteBenefits" id="WebsiteBenefits">
      <PaymentFactorHead />
      <WebsiteBenefitsCard1
        img={security}
        alt="Security"
        icon={faShieldHalved}
        head="Security"
        para="Because the top positions on search engine result pages acquire the majority of impressions and clicks, ranking in these positions can result in massive traffic improvements for your website."
        number="01"
      />
      <WebsiteBenefitsCard2
        img={fees}
        alt="Transaction Fees"
        icon={faCreditCard}
        head="Transaction Fees"
        para="When it comes to ROI, SEO gives trackable and quantifiable results. Our effective SEO services in Bangalore enable you to monitor almost every aspect of your SEO campaign, including rankings, traffic, and conversions.
"
        number="02"
      />
      <WebsiteBenefitsCard1
        img={integration}
        alt="Ease of Integration"
        icon={faEarthAmerica}
        head="Ease of Integration"
        para="SEO enables you to target customers who are actively looking for your products and services online. It generates more qualified visitors than many other marketing tactics, resulting in cost savings for businesses."
        number="03"
      />
      <WebsiteBenefitsCard2
        img={payment}
        alt="Payment Options"
        icon={faIndianRupeeSign}
        head="Payment Options"
        para="SEO optimization services in Bangalore help you to make your website more navigable for visitors while also making it easier to navigate for search engines."
        number="04"
      />
      <WebsiteBenefitsCard1
        img={customer}
        alt="Customer Support"
        icon={faHeadphonesSimple}
        head="Customer Support"
        para="As the top position rankings generate considerable impressions, having your website in these top positions on the result pages means more visibility."
        number="05"
      />
      <WebsiteBenefitsCard2
        img={scalability}
        alt="Scalability"
        icon={faChartBar}
        head="Scalability"
        para="SEO optimization services in Bangalore help you to make your website more navigable for visitors while also making it easier to navigate for search engines."
        number="06"
      />
    </div>
  );
};

export default PaymentFactor;
