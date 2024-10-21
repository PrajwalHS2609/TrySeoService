import React from "react";
import { Helmet } from "react-helmet-async";
import SeoHeader from "../SeoHeader/SeoHeader";
import LocalSeoHead from "./LocalSeoHead";
import LocalSeoWhy from "./LocalSeoWhy";
import LocalSeoKey from "./LocalSeoKey";
import LocalSeoBenefits from "./LocalSeoBenefits";

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
    </div>
  );
};

export default LocalSeo;
