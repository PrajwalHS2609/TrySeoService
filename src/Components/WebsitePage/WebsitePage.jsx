import React from "react";
import "./WebsitePage.css";
import WebsiteHeader from "./WebsiteHeader/WebsiteHeader";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import HomePricing from "./../HomePage/HomePricing/HomePricing";
import WebsiteHowIt from "./WebsiteHowIt/WebsiteHowIt";
import HomeMarquee from "../HomePage/HomeMarquee/HomeMarquee";
import WebsiteBenefits from "./WebsiteBenefits/WebsiteBenefits";
import WebsiteClient from "./WebsiteClient/WebsiteClient";
import WebsiteWhy from "./WebsiteWhy/WebsiteWhy";
import WebsiteFaq from "./WebsiteFaq/WebsiteFaq";
const WebsitePage = () => {
  return (
    <div className="websitePage">
      <WebsiteHeader />
      <WebsiteHowIt />
      <HomeMarquee/>
      <WebsiteBenefits/>
      <WebsiteWhy/>
      <HomePricing />
      <HomeTestimonial />
      <WebsiteFaq />
      <WebsiteClient/>
    </div>
  );
};

export default WebsitePage;
