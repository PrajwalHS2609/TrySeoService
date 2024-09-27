import React from "react";
import ContentPageHeader from "./ContentPageHeader";
import ContentBenefits from "./ContentBenefits/ContentBenefits";
import ContentPageWhy from "./ContentWhy/ContentWhy";
import ContentReason from "./ContentReason/ContentReason";
import WebsiteClient from "./../WebsitePage/WebsiteClient/WebsiteClient";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import ContentPricing from "./ContentWriting/ContentPricing";
import "./ContentPage.css";
import ContentFaq from "./ContentFaq/ContentFaq";
const ContentPage = () => {
  return (
    <div className="contentPage">
      <ContentPageHeader />
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
