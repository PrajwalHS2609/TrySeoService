import React from "react";
import { Helmet } from "react-helmet-async";
import OnPageSeoHead from "./OnPageSeoHead/OnPageSeoHead";
import OnPageSeoWhy from "./OnPageSeoWhy/OnPageSeoWhy";
import OnPageSeoKey from "./OnPageSeoKey/OnPageSeoKey";
import OnPageSeoBenefits from "./OnPageSeoBenefits";
import SeoHeader from "../SeoHeader/SeoHeader";
import SeoPricing from "../SeoPricing/SeoPricing";
import WebsiteFaq from "../../WebsitePage/WebsiteFaq/WebsiteFaq";
import WebsiteClient from "../../WebsitePage/WebsiteClient/WebsiteClient";

const OnPageSeo = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>
          On-Page SEO Services in Bangalore | SEO On-Page Optimization in
          Bangalore
        </title>
        <meta
          name="description"
          content="On-Page SEO Services in Bangalore. At TrySEOServices.com, we specialize in providing tailored On-Page SEO Services in Bangalore that cater to the unique needs of your business."
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/on-page-seo-services-in-bangalore"
        />
      </Helmet>
      <SeoHeader />
      <OnPageSeoHead />
      <OnPageSeoWhy />
      <OnPageSeoKey />
      <OnPageSeoBenefits />
      <SeoPricing />
      <WebsiteFaq />
      <WebsiteClient />
    </div>
  );
};

export default OnPageSeo;
