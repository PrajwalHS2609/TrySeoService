import React from "react";
import PaymentHeader from "./PaymentHeader";
import PaymentService from "./PaymentService";
import PaymentWhy from "./PaymentWhy";
import PaymentKey from "./PaymentKey";
import PaymentReason from "./PaymentReason/PaymentReason";
import WebsiteClient from "./../WebsitePage/WebsiteClient/WebsiteClient";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import PaymentFactor from "./PaymentFactor/PaymentFactor";
import PaymentFaq from "./PaymentFaq/PaymentFaq";

const PaymentPage = () => {
  return (
    <div className="homePageContainer">
      <PaymentHeader />
      <PaymentService />
      <PaymentWhy />
      <PaymentKey />
      <PaymentFactor />
      <PaymentReason />
      <WebsiteClient />
      <HomeTestimonial />
      <PaymentFaq />
    </div>
  );
};

export default PaymentPage;
