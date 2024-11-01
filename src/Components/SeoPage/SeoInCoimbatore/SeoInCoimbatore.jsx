import React from "react";
import { Helmet } from "react-helmet-async";
import SeoHeader from "../SeoHeader";
import SeoPricing from "../SeoPricing/SeoPricing";
import WebsiteFaq from "../../WebsitePage/WebsiteFaq/WebsiteFaq";
import WebsiteClient from "../../WebsitePage/WebsiteClient/WebsiteClient";
import SeoInCoimbatoreHead from "./SeoInCoimbatoreHead";
import SeoInCoimbatoreWhy from "./SeoInCoimbatoreWhy";
import SeoInCoimbatoreWhat from "./SeoInCoimbatoreWhat";
import SeoInCoimbatoreImpact from "./SeoInCoimbatoreImpact";
import SeoInCoimbatoreWhyChoose from "./SeoInCoimbatoreWhyChoose";
import SeoInCoimbatoreTips from "./SeoInCoimbatoreTips";
import SeoInCoimbatoreAchieve from "./SeoInCoimbatoreAchieve";
import SeoInCoimbatoreSuccess from "./SeoInCoimbatoreSuccess";

const SeoInCoimbatore = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>
         SEO Services in Coimbatore | Local SEO Services in Coimbatore        </title>
        <meta
          name="description"
          content="SEO Services in Coimbatore play a pivotal role in helping local businesses capture this demand, build brand awareness, and enhance online visibility. Call Now!"
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/seo-services-in-coimbatore"
        />
      </Helmet>
      <SeoHeader />
      <SeoInCoimbatoreHead />
      <SeoInCoimbatoreWhy />
      <SeoInCoimbatoreWhat />
      <SeoInCoimbatoreImpact />
      <SeoInCoimbatoreWhyChoose />
      <SeoInCoimbatoreTips />
      <SeoInCoimbatoreAchieve />
      <SeoInCoimbatoreSuccess />
      <SeoPricing />
      <WebsiteFaq />
      <WebsiteClient />
    </div>
  );
};

export default SeoInCoimbatore;
