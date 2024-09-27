import React from "react";
import SmsHeader from "./SmsHeader";
import SmsWhy from "./SmsWhy";
import WebsiteClient from "./../WebsitePage/WebsiteClient/WebsiteClient";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import SmsService from "./SmsService/SmsService";
import SmsChoose from "./SmsChoose";
import SmsFaq from "./SmsFaq/SmsFaq";

const SmsPage = () => {
  return (
    <div className="homePageContainer">
      <SmsHeader />
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
