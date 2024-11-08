import React, { Suspense } from "react";
import "./SeoPage.css";
import SeoService from "./SeoService/SeoService";
import SeoBenefits from "./SeoBenefits/SeoBenefits";
import SeoPricing from "./SeoPricing/SeoPricing";
import WebsiteClient from "../WebsitePage/WebsiteClient/WebsiteClient";
import SeoReasons from "./SeoReasons/SeoReasons";
import WebsiteFaq from "../WebsitePage/WebsiteFaq/WebsiteFaq";
import HomeMarquee from "../HomePage/HomeMarquee/HomeMarquee";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
const SeoHeader = React.lazy(() => import("./SeoHeader"));

// import HomeHeader from "../HomePage/HomeHeader/HomeHeader";
const SeoPage = () => {
  return (
    <div className="seoPage">
      <Helmet>
        <title>SEO Services in Bangalore - Freelance SEO Near Me</title>
        <meta
          name="description"
          content="SEO Services in Bangalore. Hire SEO experts for High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/seo-services-in-bangalore"
        />
      </Helmet>
      <Suspense fallback={<p>Loading....</p>}>
        <SeoHeader />
      </Suspense>
      <BreadCrumb txt="SEO" />
      <SeoService />
      <HomeMarquee />
      <SeoBenefits />
      <SeoReasons />
      <SeoPricing />
      <WebsiteFaq />
      <WebsiteClient />
    </div>
  );
};

export default SeoPage;
