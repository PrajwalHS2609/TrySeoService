import React from "react";
import GoogleAdsHeader from "./GoogleAdsHeader";
import GoogleAdsBenefits from "./GoogleAdsBenefits/GoogleAdsBenefits";
import WebsiteClient from "../WebsitePage/WebsiteClient/WebsiteClient";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import HomeFaq from "../HomePage/HomeFaq/HomeFaq";
import GoogleAdsService from "./GoogleAdsService/GoogleAdsService";
import GoogleAdsPricing from "./GoogleAdsPricing/GoogleAdsPricing";
import GoogleAdsFaq from "./GoogleAdsFaq/GoogleAdsFaq";

const GoogleAdsPage = () => {
  return (
    <div className="GoogleAdsPage">
      <GoogleAdsHeader />
      <GoogleAdsService/>
      <GoogleAdsBenefits />
      <WebsiteClient />
      <HomeTestimonial />
      <GoogleAdsPricing/>
      <GoogleAdsFaq />
    </div>
  );
};

export default GoogleAdsPage;
