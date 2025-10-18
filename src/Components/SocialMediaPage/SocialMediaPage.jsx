import React, { Suspense } from "react";
import "./SocialMediaPage.css";
import SocialMediaBenefits from "./SocialMediaBenefits/SocialMediaBenefits";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import SocialMediaPricing from "./SocialMediaPricing/SocialMediaPricing";
import SocialMediaWhyHead from "./SocialMediaWhy/SocialMediaWhyHead";
import SocialMediaChoose from "./SocialMediaChoose";
import SocialMediaFaq from "./SocialMediaFaq/SocialMediaFaq";
import HomeMarquee from "./../HomePage/HomeMarquee/HomeMarquee";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { useLocation } from "react-router-dom";
import SocialMediaServiceHead from "./SocialMediaService/SocialMediaServiceHead";
import SocialMediaServiceSubHead from "./SocialMediaService/SocialMediaServiceSubHead";
import SocialMediaServiceBenefits from "./SocialMediaService/SocialMediaServiceBenefits";
import SeoServiceBook from "../SeoPage/SeoService/SeoServiceBook";
import WebsiteServiceBrochure from "../WebsitePage/WebsiteService/WebsiteServiceBrochure";
import SocialMediaPackage from "./SocialMediaService/SocialMediaPackage";
const SocialMediaHeader = React.lazy(() => import("./SocialMediaHeader"));

const SocialMediaPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://tryseoservices.com${location.pathname}`;
  return (
    <div className="socialMediaPage">
      <Helmet>
        <title>
          Social Media Marketing Services in Bangalore for Small Business
        </title>
        <meta
          name="description"
          content="Social Media Marketing Services in Bangalore For High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
        />
        <link rel="canonical" href={canonicalUrl} />{" "}
      </Helmet>
      <Suspense fallback={<p>Loading....</p>}>
        <SocialMediaHeader />
      </Suspense>{" "}
      <BreadCrumb txt="Social Media " />
      <div className="component-container">
        <div className="component-main">
          <SocialMediaServiceHead />
          <div className="component-mainContent">
            <SocialMediaServiceSubHead />
            <SocialMediaServiceBenefits />
            <SeoServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <WebsiteServiceBrochure />
        </div>
      </div>
      <HomeTestimonial />
      <SocialMediaPackage />
      <SocialMediaFaq />
    </div>
  );
};

export default SocialMediaPage;
