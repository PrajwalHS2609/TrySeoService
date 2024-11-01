import React from "react";
import { Helmet } from "react-helmet-async";
import SeoHeader from "../SeoHeader";
import SeoPricing from "../SeoPricing/SeoPricing";
import WebsiteFaq from "../../WebsitePage/WebsiteFaq/WebsiteFaq";
import WebsiteClient from "../../WebsitePage/WebsiteClient/WebsiteClient";
import SeoInHyderabadHead from "./SeoInHyderabadHead";
import SeoInHyderabadBenefits from "./SeoInHyderabadBenefits";
import SeoInHyderabadHow from "./SeoInHyderabadHow";
import SeoInHyderabadFuture from "./SeoInHyderabadFuture";
import SeoInHyderabadChoosing from "./SeoInHyderabadChoosing";
import SeoInHyderabadInvest from "./SeoInHyderabadInvest";

const SeoInHyderabad = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>
          SEO Services in Hyderabad | Local SEO Services in Hyderabad
        </title>
        <meta
          name="description"
          content="SEO Services in Hyderabad are crucial for businesses looking to enhance their online visibility and attract targeted traffic. Call Now!"
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/local-seo-services-in-bangalore"
        />
      </Helmet>
      <SeoHeader />
      <SeoInHyderabadHead />
      <SeoInHyderabadBenefits />
      <SeoInHyderabadHow />
      <SeoInHyderabadChoosing />
      <SeoInHyderabadFuture />
      <SeoInHyderabadInvest />
      <SeoPricing />
      <WebsiteFaq />
      <WebsiteClient />
    </div>
  );
};

export default SeoInHyderabad;
