import React from "react";
import SeoInMysoreHead from "./SeoInMysoreHead";
import SeoInMysoreKey from "./SeoInMysoreKey";
import SeoInMysoreComponent from "./SeoInMysoreComponent";
import SeoInMysoreWhy from "./SeoInMysoreWhy";
import SeoInMysoreHow from "./SeoInMysoreHow";
import { Helmet } from "react-helmet-async";
import WebsiteFaq from "../../WebsitePage/WebsiteFaq/WebsiteFaq";
import WebsiteClient from "../../WebsitePage/WebsiteClient/WebsiteClient";
import SeoHeader from "../SeoHeader";

const SeoInMysore = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>
        SEO Services in Mysore| Local SEO Services in Mysore</title>
        <meta
          name="description"
          content="SEO Services in Mysore play a pivotal role in helping local businesses capture this demand, build brand awareness, and enhance online visibility. Call Now!"
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/seo-services-in-mysore"
        />
      </Helmet>
      <SeoHeader />
      <SeoInMysoreHead />
      <SeoInMysoreKey />
      <SeoInMysoreComponent />
      <SeoInMysoreWhy />
      <SeoInMysoreHow />
      <WebsiteFaq />
      <WebsiteClient />
    </div>
  );
};

export default SeoInMysore;
