import React from "react";
import GoogleAdsHeader from "./GoogleAdsHeader";
import GoogleAdsBenefits from "./GoogleAdsBenefits/GoogleAdsBenefits";
import WebsiteClient from "../WebsitePage/WebsiteClient/WebsiteClient";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import GoogleAdsService from "./GoogleAdsService/GoogleAdsService";
import GoogleAdsPricing from "./GoogleAdsPricing/GoogleAdsPricing";
import GoogleAdsFaq from "./GoogleAdsFaq/GoogleAdsFaq";
import HomeMarquee from "../HomePage/HomeMarquee/HomeMarquee";

const GoogleAdsPage = () => {
  return (
    <div className="GoogleAdsPage">
      <GoogleAdsHeader />
      <GoogleAdsService/>
      <HomeMarquee/>
      <GoogleAdsBenefits />
      <WebsiteClient />
      <HomeTestimonial />
      <GoogleAdsPricing/>
      <GoogleAdsFaq />
    </div>
  );
};

export default GoogleAdsPage;
