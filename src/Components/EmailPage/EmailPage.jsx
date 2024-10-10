import React from "react";
import EmailPageHeader from "./EmailPageHeader";
import EmailWhy from "./EmailWhy";
import EmailComprehensive from "./EmailComprehensive/EmailComprehensive";
import WebsiteClient from "../WebsitePage/WebsiteClient/WebsiteClient";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import EmailFaq from "./EmailFaq/EmailFaq";
import { Helmet } from "react-helmet-async";

const EmailPage = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>Email Marketing Services in Bangalore for Small Business</title>
        <meta
          name="description"
          content="Email Marketing Services in Bangalore for Small Business. High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/email-marketing-service-in-bangalore"
        />
      </Helmet>
      <EmailPageHeader />
      <EmailWhy />
      <EmailComprehensive />
      <WebsiteClient />
      <HomeTestimonial />
      <EmailFaq />
    </div>
  );
};

export default EmailPage;
