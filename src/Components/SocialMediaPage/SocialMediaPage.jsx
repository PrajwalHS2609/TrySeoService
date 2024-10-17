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
import HomeMarquee from "./../HomePage/HomeMarquee/HomeMarquee";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
const SocialMediaPage = () => {
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
        <link
          rel="canonical"
          href="https://tryseoservices.com/social-media-marketing-services-in-bangalore"
        />
      </Helmet>
      <SocialMediaHeader />
      <BreadCrumb txt="Social Media " />
      <SocialMediaWhyHead />
      <HomeMarquee />
      <SocialMediaBenefits />
      <SocialMediaChoose />
      <WebsiteClient />
      <HomeTestimonial />
      <SocialMediaPricing />
      <SocialMediaFaq />
    </div>
  );
};

export default SocialMediaPage;
