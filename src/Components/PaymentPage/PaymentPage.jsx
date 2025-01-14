import React, { Suspense } from "react";
import PaymentService from "./PaymentService";
import PaymentWhy from "./PaymentWhy";
import PaymentKey from "./PaymentKey";
import PaymentReason from "./PaymentReason/PaymentReason";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import PaymentFactor from "./PaymentFactor/PaymentFactor";
import PaymentFaq from "./PaymentFaq/PaymentFaq";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
const PaymentHeader = React.lazy(() => import("./PaymentHeader"));

const PaymentPage = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>
          Payment Gateway Services in Bangalore for Small Business & Ecommerce{" "}
        </title>
        <meta
          name="description"
          content="Payment Gateway Services in Bangalore for Small Business & Ecommerce. Our solutions are tailored to meet your business needs, ensuring secure and seamless transactions."
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/payment-gateway-service-in-bangalore"
        />
      </Helmet>
      <Suspense fallback={<p>Loading....</p>}>
        <PaymentHeader />
      </Suspense>
      <BreadCrumb txt="Payment Gateway" />
      <PaymentService />
      <PaymentWhy />
      <PaymentKey />
      <PaymentFactor />
      <PaymentReason />
      <HomeTestimonial />
      <PaymentFaq />
    </div>
  );
};

export default PaymentPage;
