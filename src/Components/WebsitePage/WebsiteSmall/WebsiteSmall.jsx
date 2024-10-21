import React from "react";
import WebsiteHeader from "../WebsiteHeader/WebsiteHeader";
import WebsiteSmallFeature from "./WebsiteSmallFeature";
import WebsiteSmallWho from "./WebsiteSmallWho";
import WebsiteSmallWhat from "./WebsiteSmallWhat";
import WebsiteSmallHow from "./WebsiteSmallHow";
import { Helmet } from "react-helmet-async";
import WebsiteSmallWhy from "./WebsiteSmallWhy";
import WebsiteSmallBenefits from "./WebsiteSmallBenefits";
import WebsiteSmallHead from "./WebsiteSmallHead";
import HomePricing from "../../HomePage/HomePricing/HomePricing";
import HomeTestimonial from "../../HomePage/HomeTestimonial/HomeTestimonial";
import WebsiteFaq from "../WebsiteFaq/WebsiteFaq";
import WebsiteClient from "../WebsiteClient/WebsiteClient";

const WebsiteSmall = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>
          Website Design in Bangalore at Rs.10000 for Small Business
        </title>
        <meta
          name="description"
          content="Website Design in Bangalore at Rs.10000 for Small Business. Our affordable website design service provides you with a high-quality, fully responsive website that helps you make a lasting impression online."
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/website-design-in-bangalore-at-rs-10000"
        />
      </Helmet>
      <WebsiteHeader />
      <WebsiteSmallHead />
      <WebsiteSmallWhy />
      <WebsiteSmallFeature />
      <WebsiteSmallBenefits />
      <WebsiteSmallWho />
      <WebsiteSmallWhat />
      <WebsiteSmallHow />
      <HomePricing />
      <HomeTestimonial />
      <WebsiteFaq />
      <WebsiteClient />
    </div>
  );
};

export default WebsiteSmall;
