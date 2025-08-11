import React, { Suspense } from "react";
import ContentBenefits from "./ContentBenefits/ContentBenefits";
import ContentPageWhy from "./ContentWhy/ContentWhy";
import ContentReason from "./ContentReason/ContentReason";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import ContentPricing from "./ContentPricing/ContentPricing";
import "./ContentPage.css";
import ContentFaq from "./ContentFaq/ContentFaq";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { useLocation } from "react-router-dom";
const ContentPageHeader = React.lazy(() => import("./ContentPageHeader"));

const ContentPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://tryseoservices.com${location.pathname}`;
  return (
    <div className="contentPage">
      <Helmet>
        <title>Content Writing services in Bangalore for SEO & Blogs </title>
        <meta
          name="description"
          content="Content Writing services in Bangalore for SEO & Blogs. High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
        />
        <link rel="canonical" href={canonicalUrl} />{" "}
      </Helmet>
      <Suspense fallback={<p>Loading....</p>}>
        <ContentPageHeader />
      </Suspense>
      <BreadCrumb txt="Content Writing" />
      <ContentPageWhy />
      <ContentBenefits />
      <ContentReason />
      <HomeTestimonial />
      <ContentPricing />
      <ContentFaq />
    </div>
  );
};

export default ContentPage;
