import React, { Suspense } from "react";
import EmailWhy from "./EmailWhy";
import EmailComprehensive from "./EmailComprehensive/EmailComprehensive";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import EmailFaq from "./EmailFaq/EmailFaq";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { useLocation } from "react-router-dom";
import SeoServiceBrochure from "../SeoPage/SeoService/SeoServiceBrochure";
import SeoServiceBook from "../SeoPage/SeoService/SeoServiceBook";
import EmailPageServicesHead from "./EmailPageServices/EmailPageServicesHead";
import EmailPageServices from "./EmailPageServices/EmailPageServices";
import SeoServiceSubHead from "../SeoPage/SeoService/SeoServiceSubHead";
import SeoSideBarLinks from "../SeoPage/SeoService/SeoSideBarLinks";
const EmailPageHeader = React.lazy(() => import("./EmailPageHeader"));

const EmailPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://tryseoservices.com${location.pathname}`;
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>Email Marketing Services in Bangalore for Small Business</title>
        <meta
          name="description"
          content="Email Marketing Services in Bangalore for Small Business. High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
        />
        <link rel="canonical" href={canonicalUrl} />{" "}
      </Helmet>
      <Suspense fallback={<p>Loading....</p>}>
        <EmailPageHeader />
      </Suspense>{" "}
      <BreadCrumb txt="Email" />
      <div className="component-container">
        <div className="component-main">
          <EmailPageServicesHead />
          <div className="component-mainContent">
            <SeoServiceSubHead />
            <EmailPageServices />
            <SeoServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <SeoServiceBrochure />
          <SeoSideBarLinks />
        </div>
      </div>
      <HomeTestimonial />
      <EmailFaq />
    </div>
  );
};

export default EmailPage;
