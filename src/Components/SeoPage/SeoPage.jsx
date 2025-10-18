import React, { Suspense } from "react";
import "./SeoPage.css";
import SeoService from "./SeoService/SeoService";
import SeoBenefits from "./SeoBenefits/SeoBenefits";
import SeoReasons from "./SeoReasons/SeoReasons";
import WebsiteFaq from "../WebsitePage/WebsiteFaq/WebsiteFaq";
import HomeMarquee from "../HomePage/HomeMarquee/HomeMarquee";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import { useLocation, useParams } from "react-router-dom";
import FranceSeoPageService from "../France/FranceSeoPage/FranceSeoPageService/FranceSeoPageService";
import FranceSeoPageBenefits from "../France/FranceSeoPage/FranceSeoPageBenefits/FranceSeoPageBenefits";
import FranceSeoPageReason from "../France/FranceSeoPage/FranceSeoPageReason/FranceSeoPageReason";
import FranceSeoPageFaq from "../France/FranceSeoPage/FranceSeoPageFaq/FranceSeoPageFaq";
import SeoServiceHead from "./SeoService/SeoServiceHead";
import SeoServiceSubHead from "./SeoService/SeoServiceSubHead";
import SeoServiceBenefits from "./SeoService/SeoServiceBenefits";
import SeoServiceBook from "./SeoService/SeoServiceBook";
import SeoServiceBrochure from "./SeoService/SeoServiceBrochure";
import SeoPackage from "./SeoPackage/SeoPackage";
const SeoHeader = React.lazy(() => import("./SeoHeader"));

// import HomeHeader from "../HomePage/HomeHeader/HomeHeader";
const SeoPage = () => {
  const { countryCode } = useParams(); // get 'de', 'fr', 'in', etc.

  const location = useLocation();
  const canonicalUrl = `https://tryseoservices.com${location.pathname}`;

  const renderFranceSeoService = () => {
    switch (countryCode?.toLowerCase()) {
      case "fr":
        return <FranceSeoPageService />;
      default:
        return <SeoService />; // default version (India)
    }
  };
  const renderFranceSeoBenefits = () => {
    switch (countryCode?.toLowerCase()) {
      case "fr":
        return <FranceSeoPageBenefits />;
      default:
        return <SeoBenefits />; // default version (India)
    }
  };
  const renderFranceSeoReasons = () => {
    switch (countryCode?.toLowerCase()) {
      case "fr":
        return <FranceSeoPageReason />;
      default:
        return <SeoReasons />; // default version (India)
    }
  };
  const renderFranceSeoFaq = () => {
    switch (countryCode?.toLowerCase()) {
      case "fr":
        return <FranceSeoPageFaq />;
      default:
        return <WebsiteFaq />; // default version (India)
    }
  };
  return (
    <div className="seoPage">
      <Helmet>
        <title>SEO Services in Bangalore - Freelance SEO Near Me</title>
        <meta
          name="description"
          content="SEO Services in Bangalore. Hire SEO experts for High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
        />
        <link rel="canonical" href={canonicalUrl} />{" "}
      </Helmet>
      <Suspense fallback={<p>Loading....</p>}>
        <SeoHeader />
      </Suspense>
      <BreadCrumb txt="SEO" />
      <div className="component-container">
        <div className="component-main">
          <SeoServiceHead />
          <div className="component-mainContent">
            <SeoServiceSubHead />
            <SeoService />
            <SeoServiceBenefits />
            <SeoServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <SeoServiceBrochure />
        </div>
      </div>
      <HomeTestimonial />
      <SeoPackage/>
      {renderFranceSeoFaq()}
    </div>
  );
};

export default SeoPage;
