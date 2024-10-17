import React from "react";
import ContentPageHeader from "./ContentPageHeader";
import ContentBenefits from "./ContentBenefits/ContentBenefits";
import ContentPageWhy from "./ContentWhy/ContentWhy";
import ContentReason from "./ContentReason/ContentReason";
import WebsiteClient from "./../WebsitePage/WebsiteClient/WebsiteClient";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import ContentPricing from "./ContentPricing/ContentPricing";
import "./ContentPage.css";
import ContentFaq from "./ContentFaq/ContentFaq";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
const ContentPage = () => {
  return (
    <div className="contentPage">
      <Helmet>
        <title>Content Writing services in Bangalore for SEO & Blogs </title>
        <meta
          name="description"
          content="Content Writing services in Bangalore for SEO & Blogs. High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/content-writing-service-in-bangalore"
        />
      </Helmet>
      <ContentPageHeader />
      <BreadCrumb txt="Content Writing" />
      <ContentPageWhy />
      <ContentBenefits />
      <ContentReason />
      <WebsiteClient />
      <HomeTestimonial />
      <ContentPricing />
      <ContentFaq />
    </div>
  );
};

export default ContentPage;
