import React, { Suspense } from "react";
import SmsWhy from "./SmsWhy";
import WebsiteClient from "./../WebsitePage/WebsiteClient/WebsiteClient";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import SmsService from "./SmsService/SmsService";
import SmsChoose from "./SmsChoose";
import SmsFaq from "./SmsFaq/SmsFaq";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
const SmsHeader = React.lazy(() => import("./SmsHeader"));

const SmsPage = () => {
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
        <link
          rel="canonical"
          href="https://tryseoservices.com/sms-and-whatsapp-marketing-services-in-bangalore"
        />
      </Helmet>
      <Suspense fallback={<p>Loading....</p>}>
        <SmsHeader />
      </Suspense>{" "}
      <BreadCrumb txt="SMS & WhatsApp" />
      <SmsWhy />
      <SmsService />
      <SmsChoose />
      <WebsiteClient />
      <HomeTestimonial />
      <SmsFaq />{" "}
    </div>
  );
};

export default SmsPage;
