import React, { Suspense } from "react";
import "./WebsitePage.css";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import HomePricing from "./../HomePage/HomePricing/HomePricing";
import WebsiteHowIt from "./WebsiteHowIt/WebsiteHowIt";
import HomeMarquee from "../HomePage/HomeMarquee/HomeMarquee";
import WebsiteBenefits from "./WebsiteBenefits/WebsiteBenefits";
import WebsiteWhy from "./WebsiteWhy/WebsiteWhy";
import WebsiteFaq from "./WebsiteFaq/WebsiteFaq";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { useLocation, useParams } from "react-router-dom";
import FranceHowItWorks from "../France/FranceWebsitePage/FranceHowItWorks/FranceHowItWorks";
import FranceBenefits from "../France/FranceWebsitePage/FranceBenefits/FranceBenefits";
import FranceWebsiteWhy from "../France/FranceWebsitePage/FranceWebsiteWhy/FranceWebsiteWhy";
import FranceWebsiteFaq from "../France/FranceWebsitePage/FranceWebsiteFaq/FranceWebsiteFaq";
const WebsiteHeader = React.lazy(() => import("./WebsiteHeader/WebsiteHeader"));

const WebsitePage = () => {
  const { countryCode } = useParams(); // get 'de', 'fr', 'in', etc.

  const location = useLocation();
  const canonicalUrl = `https://tryseoservices.com${location.pathname}`;

  // const renderFranceIntro = () => {
  //   switch (countryCode?.toLowerCase()) {
  //     case "fr":
  //       return <FranceWebsiteIntro />;
  //     default:
  //       return; 
  //   }
  // };

  const renderFranceHow = () => {
    switch (countryCode?.toLowerCase()) {
      case "fr":
        return <FranceHowItWorks />;
      default:
        return <WebsiteHowIt />; // default version (India)
    }
  };
  const renderFranceBenefits = () => {
    switch (countryCode?.toLowerCase()) {
      case "fr":
        return <FranceBenefits />;
      default:
        return <WebsiteBenefits />; // default version (India)
    }
  };
  const renderFranceWebsiteWhy = () => {
    switch (countryCode?.toLowerCase()) {
      case "fr":
        return <FranceWebsiteWhy />;
      default:
        return <WebsiteWhy />; // default version (India)
    }
  };
  const renderFranceWebsiteFaq = () => {
    switch (countryCode?.toLowerCase()) {
      case "fr":
        return <FranceWebsiteFaq />;
      default:
        return <WebsiteFaq />; // default version (India)
    }
  };
  return (
    <div className="websitePage">
      <Helmet>
        <title>
          Website Designing Services in Bangalore for Small Business{" "}
        </title>
        <meta
          name="description"
          content="Website Designing Services in Bangalore for Small Business. High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
        />
        <link rel="canonical" href={canonicalUrl} />{" "}
      </Helmet>
      <Suspense fallback={<p>Loading....</p>}>
        <WebsiteHeader />
      </Suspense>

      <BreadCrumb txt="Website" />
      {/* {renderFranceIntro()} */}
      {renderFranceHow()}
      <HomeMarquee />
      {renderFranceBenefits()}
      {renderFranceWebsiteWhy()}
      <HomePricing />
      <HomeTestimonial />
      {renderFranceWebsiteFaq()}
    </div>
  );
};

export default WebsitePage;
