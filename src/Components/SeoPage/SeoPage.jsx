import React from "react";
import "./SeoPage.css";
import SeoHeader from "./SeoHeader/SeoHeader";
import SeoService from "./SeoService/SeoService";
import SeoBenefits from "./SeoBenefits/SeoBenefits";
import SeoPricing from "./SeoPricing/SeoPricing";
import WebsiteClient from "../WebsitePage/WebsiteClient/WebsiteClient";
import SeoReasons from "./SeoReasons/SeoReasons";
import WebsiteFaq from "../WebsitePage/WebsiteFaq/WebsiteFaq";
import HomeMarquee from "../HomePage/HomeMarquee/HomeMarquee";
const SeoPage = () => {
  return (
    <div className="seoPage">
      <SeoHeader />
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
