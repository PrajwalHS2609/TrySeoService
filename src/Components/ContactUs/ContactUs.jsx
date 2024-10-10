import React from "react";
import ContactUsHeader from "./ContactUsHeader";
import "./ContactUs.css";
import ContactUsAddress from "./ContactUsAddress";
import ContactUsMap from "./ContactUsMap";
import ContactUsForm from "./ContactUsForm";
import { Helmet } from "react-helmet-async";
const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us for Digital Marketing Consultation & Solutions</title>
        <meta
          name="description"
          content="Contact Us for Digital Marketing Consultation & Solutions for Small Business.  High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
        />
        <link rel="canonical" href="https://tryseoservices.com/contact-us" />
      </Helmet>
      <ContactUsHeader />
      <div className="contactUsWrapper">
        <div className="contactUsContent1">
          <ContactUsAddress />
        </div>
        <div className="contactUsContent2">
          <ContactUsForm />
        </div>
      </div>
      <ContactUsMap />
    </div>
  );
};

export default ContactUs;
