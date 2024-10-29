import React from "react";
import { Helmet } from "react-helmet-async";
import SeoHeader from "../SeoHeader";
import LocalSeoHead from "./LocalSeoHead";
import LocalSeoWhy from "./LocalSeoWhy";
import LocalSeoKey from "./LocalSeoKey";
import LocalSeoBenefits from "./LocalSeoBenefits";
import SeoPricing from "../SeoPricing/SeoPricing";
import WebsiteFaq from "../../WebsitePage/WebsiteFaq/WebsiteFaq";
import WebsiteClient from "../../WebsitePage/WebsiteClient/WebsiteClient";

const LocalSeo = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>
          Local SEO Services in Bangalore| Best Local SEO in Bangalore at Best
          Price
        </title>
        <meta
          name="description"
          content="Local SEO Services in Bangalore have emerged as a crucial component for businesses looking to attract local customers. Call Now!"
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/local-seo-services-in-bangalore"
        />
      </Helmet>
      <SeoHeader />
      <LocalSeoHead />
      <LocalSeoWhy />
      <LocalSeoKey />
      <LocalSeoBenefits />
      <SeoPricing />
      <WebsiteFaq />
      <WebsiteClient />
    </div>
  );
};

export default LocalSeo;
