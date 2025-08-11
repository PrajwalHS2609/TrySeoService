import React, { Suspense } from "react";
import EmailWhy from "./EmailWhy";
import EmailComprehensive from "./EmailComprehensive/EmailComprehensive";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import EmailFaq from "./EmailFaq/EmailFaq";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { useLocation } from "react-router-dom";
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
      <EmailWhy />
      <EmailComprehensive />
      <HomeTestimonial />
      <EmailFaq />
    </div>
  );
};

export default EmailPage;
