import React from "react";
import { Helmet } from "react-helmet-async";
import SeoHeader from "../SeoHeader";
import SeoPricing from "../SeoPricing/SeoPricing";
import WebsiteFaq from "../../WebsitePage/WebsiteFaq/WebsiteFaq";
import WebsiteClient from "../../WebsitePage/WebsiteClient/WebsiteClient";
import SeoInMangaloreHead from "./SeoInMangaloreHead";
import SeoInMangaloreWhyChoose from "./SeoInMangaloreWhyChoose";
import SeoInMangaloreKey from "./SeoInMangaloreKey";
import SeoInMangaloreHow from "./SeoInMangaloreHow";

const SeoInMangalore = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>
          SEO Services in Mangalore| Local SEO Services in Mangalore{" "}
        </title>
        <meta
          name="description"
          content="SEO Services in Mangalore play a pivotal role in helping local businesses capture this demand, build brand awareness, and enhance online visibility. Call Now!"
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/seo-services-in-mangalore"
        />
      </Helmet>
      <SeoHeader />
      <SeoInMangaloreHead />
      <SeoInMangaloreWhyChoose />
      <SeoInMangaloreKey />
      <SeoInMangaloreHow />
      <SeoInMangaloreWhyChoose />
      <SeoPricing />
      <WebsiteFaq />
      <WebsiteClient />
    </div>
  );
};

export default SeoInMangalore;
