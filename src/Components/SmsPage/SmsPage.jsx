import React, { Suspense } from "react";
import SmsWhy from "./SmsWhy";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import SmsService from "./SmsService/SmsService";
import SmsChoose from "./SmsChoose";
import SmsFaq from "./SmsFaq/SmsFaq";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { useLocation } from "react-router-dom";
const SmsHeader = React.lazy(() => import("./SmsHeader"));

const SmsPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://tryseoservices.com${location.pathname}`;
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>
          SMS & What'sApp Marketing Services in Bangalore for Small Business{" "}
        </title>
        <meta
          name="description"
          content="SMS & What'sApp Marketing Services in Bangalore for Small Business.  High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
        />
        <link rel="canonical" href={canonicalUrl} />{" "}
      </Helmet>
      <Suspense fallback={<p>Loading....</p>}>
        <SmsHeader />
      </Suspense>{" "}
      <BreadCrumb txt="SMS & WhatsApp" />
      <SmsWhy />
      <SmsService />
      <SmsChoose />
      <HomeTestimonial />
      <SmsFaq />{" "}
    </div>
  );
};

export default SmsPage;
