import React from "react";
import { Helmet } from "react-helmet-async";
import SeoHeader from "../SeoHeader";
import SeoPricing from "../SeoPricing/SeoPricing";
import WebsiteFaq from "../../WebsitePage/WebsiteFaq/WebsiteFaq";
import WebsiteClient from "../../WebsitePage/WebsiteClient/WebsiteClient";
import SeoInPuneHead from "./SeoInPuneHead";
import SeoInPuneWhat from "./SeoInPuneWhat";
import SeoInPuneBenefits from "./SeoInPuneBenefits";
import SeoInPuneIndustries from "./SeoInPuneIndustries";
import SeoInPuneGetting from "./SeoInPuneGetting";
import SeoInPuneHow from "./SeoInPuneHow";
import SeoInPuneComponent from './SeoInPuneComponent';

const SeoInPune = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>SEO Services in Pune | Local SEO Services in Pune </title>
        <meta
          name="description"
          content="SEO Services in Pune play a pivotal role in helping local businesses capture this demand, build brand awareness, and enhance online visibility. Call Now!"
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/seo-services-in-pune"
        />
      </Helmet>
      <SeoHeader />
      <SeoInPuneHead />
      <SeoInPuneWhat />
      <SeoInPuneComponent />
      <SeoInPuneBenefits />
      <SeoInPuneIndustries />
      <SeoInPuneHow />
      <SeoInPuneGetting />
      <SeoPricing />
      <WebsiteFaq />
      <WebsiteClient />
    </div>
  );
};

export default SeoInPune;
