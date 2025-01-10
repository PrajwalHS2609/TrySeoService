import React, { Suspense } from "react";
import "./WebsitePage.css";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import HomePricing from "./../HomePage/HomePricing/HomePricing";
import WebsiteHowIt from "./WebsiteHowIt/WebsiteHowIt";
import HomeMarquee from "../HomePage/HomeMarquee/HomeMarquee";
import WebsiteBenefits from "./WebsiteBenefits/WebsiteBenefits";
import WebsiteWhy from "./WebsiteWhy/WebsiteWhy";
import WebsiteFaq from "./WebsiteFaq/WebsiteFaq";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
const WebsiteHeader = React.lazy(() => import("./WebsiteHeader/WebsiteHeader"));

const WebsitePage = () => {
  return (
    <div className="websitePage">
      <Helmet>
        <title>
          Website Designing Services in Bangalore for Small Business{" "}
        </title>
        <meta
          name="description"
          content="Website Designing Services in Bangalore for Small Business. High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/website-designing-services-in-bangalore"
        />
      </Helmet>
      <Suspense fallback={<p>Loading....</p>}>
        <WebsiteHeader />
      </Suspense>

      <BreadCrumb txt="Website" />
      <WebsiteHowIt />
      <HomeMarquee />
      <WebsiteBenefits />
      <WebsiteWhy />
      <HomePricing />
      <HomeTestimonial />
      <WebsiteFaq />
    </div>
  );
};

export default WebsitePage;
