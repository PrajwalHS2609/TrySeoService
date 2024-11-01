import React from "react";
import { Helmet } from "react-helmet-async";
import SeoHeader from "../SeoHeader";
import SeoPricing from "../SeoPricing/SeoPricing";
import WebsiteFaq from "../../WebsitePage/WebsiteFaq/WebsiteFaq";
import WebsiteClient from "../../WebsitePage/WebsiteClient/WebsiteClient";
import SeoChennaiHead from "./SeoChennaiHead";
import SeoChennaiWhy from "./SeoChennaiWhy";
import SeoChennaiCore from "./SeoChennaiCore";
import SeoChennaiBenefits from "./SeoChennaiBenefits";
import SeoChennaiKey from "./SeoChennaiKey";
import SeoChennaiHow from "./SeoChennaiHow";
import SeoChennaiElevate from "./SeoChennaiElevate";

const SeoChennai = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>SEO Services in Chennai | Local SEO Services in Chennai </title>
        <meta
          name="description"
          content="SEO Services in Chennai play a pivotal role in helping local businesses capture this demand, build brand awareness, and enhance online visibility. Call Now!"
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/seo-services-in-chennai"
        />
      </Helmet>
      <SeoHeader />
      <SeoChennaiHead />
      <SeoChennaiWhy />
      <SeoChennaiCore />
      <SeoChennaiBenefits />
      <SeoChennaiKey />
      <SeoChennaiHow />
      <SeoChennaiElevate />
      <SeoPricing />
      <WebsiteFaq />
      <WebsiteClient />
    </div>
  );
};

export default SeoChennai;
