import React from "react";
import "./SocialMediaPage.css";
import SocialMediaHeader from "./SocialMediaHeader";
import SocialMediaBenefits from "./SocialMediaBenefits/SocialMediaBenefits";
import WebsiteClient from "../WebsitePage/WebsiteClient/WebsiteClient";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import SocialMediaPricing from "./SocialMediaPricing/SocialMediaPricing";
import SocialMediaWhyHead from "./SocialMediaWhy/SocialMediaWhyHead";
import SocialMediaChoose from "./SocialMediaChoose";
import SocialMediaFaq from "./SocialMediaFaq/SocialMediaFaq";
import HomeMarquee from './../HomePage/HomeMarquee/HomeMarquee';
const SocialMediaPage = () => {
  return (
    <div className="socialMediaPage">
      <SocialMediaHeader />
      <SocialMediaWhyHead />
      <HomeMarquee/>
      <SocialMediaBenefits />
      <SocialMediaChoose/>
      <WebsiteClient />
      <HomeTestimonial />
      <SocialMediaPricing />
      <SocialMediaFaq/>
    </div>
  );
};

export default SocialMediaPage;
