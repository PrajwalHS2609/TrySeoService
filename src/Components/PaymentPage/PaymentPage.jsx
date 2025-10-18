import React, { Suspense } from "react";
import PaymentWhy from "./PaymentWhy";
import PaymentKey from "./PaymentKey";
import PaymentReason from "./PaymentReason/PaymentReason";
import HomeTestimonial from "./../HomePage/HomeTestimonial/HomeTestimonial";
import PaymentFactor from "./PaymentFactor/PaymentFactor";
import PaymentFaq from "./PaymentFaq/PaymentFaq";
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { useLocation } from "react-router-dom";
import PaymentServiceHead from "./PaymentService/PaymentServiceHead";
import PaymentServiceSubHead from "./PaymentService/PaymentServiceSubHead";
import PaymentServiceFactors from "./PaymentService/PaymentServiceFactors";
import SeoServiceBook from "../SeoPage/SeoService/SeoServiceBook";
import WebsiteServiceBrochure from "../WebsitePage/WebsiteService/WebsiteServiceBrochure";
import SeoSideBarLinks from "../SeoPage/SeoService/SeoSideBarLinks";
const PaymentHeader = React.lazy(() => import("./PaymentHeader"));

const PaymentPage = () => {
  const location = useLocation();
  const canonicalUrl = `https://tryseoservices.com${location.pathname}`;
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
        <link rel="canonical" href={canonicalUrl} />{" "}
      </Helmet>
      <Suspense fallback={<p>Loading....</p>}>
        <PaymentHeader />
      </Suspense>
      <BreadCrumb txt="Payment Gateway" />
      <div className="component-container">
        <div className="component-main">
          <PaymentServiceHead />
          <div className="component-mainContent">
            <PaymentServiceSubHead />
            <PaymentServiceFactors />
            <SeoServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <WebsiteServiceBrochure />
          <SeoSideBarLinks />
        </div>
      </div>
      <HomeTestimonial />
      <PaymentFaq />
    </div>
  );
};

export default PaymentPage;
