import React, { Suspense } from "react";
import "./SeoPage.css";
import SeoService from "./SeoService/SeoService";
import SeoBenefits from "./SeoBenefits/SeoBenefits";
import SeoPricing from "./SeoPricing/SeoPricing";
import SeoReasons from "./SeoReasons/SeoReasons";
import WebsiteFaq from "../WebsitePage/WebsiteFaq/WebsiteFaq";
import HomeMarquee from "../HomePage/HomeMarquee/HomeMarquee";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import { useLocation } from "react-router-dom";
const SeoHeader = React.lazy(() => import("./SeoHeader"));

// import HomeHeader from "../HomePage/HomeHeader/HomeHeader";
const SeoPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://tryseoservices.com${location.pathname}`;
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
      <SeoService />
      <HomeMarquee />
      <SeoBenefits />
      <SeoReasons />
      <HomeTestimonial />
      <SeoPricing />
      <WebsiteFaq />
    </div>
  );
};

export default SeoPage;
