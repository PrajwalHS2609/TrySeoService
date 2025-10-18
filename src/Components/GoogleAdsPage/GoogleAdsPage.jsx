import React, { Suspense } from "react";
import GoogleAdsBenefits from "./GoogleAdsBenefits/GoogleAdsBenefits";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import GoogleAdsService from "./GoogleAdsService/GoogleAdsService";
import GoogleAdsPricing from "./GoogleAdsPricing/GoogleAdsPricing";
import GoogleAdsFaq from "./GoogleAdsFaq/GoogleAdsFaq";
import HomeMarquee from "../HomePage/HomeMarquee/HomeMarquee";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { useLocation } from "react-router-dom";
import GoogleAdsPackage from "./GoogleAdsPackage/GoogleAdsPackage";
import GoogleAdsServiceHead from "./GoogleAdsService/GoogleAdsServiceHead";
import SeoServiceBook from "../SeoPage/SeoService/SeoServiceBook";
import GoogleAdsServiceBenefits from "./GoogleAdsService/GoogleAdsServiceBenefits";
import SeoServiceBrochure from "../SeoPage/SeoService/SeoServiceBrochure";
import SeoServiceSubHead from "../SeoPage/SeoService/SeoServiceSubHead";
const GoogleAdsHeader = React.lazy(() => import("./GoogleAdsHeader"));

const GoogleAdsPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://tryseoservices.com${location.pathname}`;
  return (
    <div className="GoogleAdsPage">
      <Helmet>
        <title>Google Ads Specialist in Bangalore for Small Business</title>
        <meta
          name="description"
          content="Google Ads Specialist in Bangalore For High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
        />
        <link rel="canonical" href={canonicalUrl} />{" "}
      </Helmet>
      <Suspense fallback={<p>Loading....</p>}>
        <GoogleAdsHeader />
      </Suspense>
      <BreadCrumb txt="Google Ads" />
      <div className="component-container">
        <div className="component-main">
          <GoogleAdsServiceHead />
          <div className="component-mainContent">
            <SeoServiceSubHead />
            <GoogleAdsService />
            <GoogleAdsServiceBenefits />
            <SeoServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <SeoServiceBrochure />
        </div>
      </div>
      <HomeTestimonial />
      <GoogleAdsPackage />
      <GoogleAdsFaq />
    </div>
  );
};

export default GoogleAdsPage;
