import React from "react";
import GoogleAdsHeader from "./GoogleAdsHeader";
import GoogleAdsBenefits from "./GoogleAdsBenefits/GoogleAdsBenefits";
import WebsiteClient from "../WebsitePage/WebsiteClient/WebsiteClient";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import GoogleAdsService from "./GoogleAdsService/GoogleAdsService";
import GoogleAdsPricing from "./GoogleAdsPricing/GoogleAdsPricing";
import GoogleAdsFaq from "./GoogleAdsFaq/GoogleAdsFaq";
import HomeMarquee from "../HomePage/HomeMarquee/HomeMarquee";
import { Helmet } from "react-helmet-async";

const GoogleAdsPage = () => {
  return (
    <div className="GoogleAdsPage">
      <Helmet>
        <title>Google Ads Specialist in Bangalore for Small Business</title>
        <meta
          name="description"
          content="Google Ads Specialist in Bangalore For High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/google-ads-service-in-bangalore"
        />
      </Helmet>
      <GoogleAdsHeader />
      <GoogleAdsService />
      <HomeMarquee />
      <GoogleAdsBenefits />
      <WebsiteClient />
      <HomeTestimonial />
      <GoogleAdsPricing />
      <GoogleAdsFaq />
    </div>
  );
};

export default GoogleAdsPage;
