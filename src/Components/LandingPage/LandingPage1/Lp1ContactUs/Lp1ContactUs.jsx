import React from "react";
import "./Lp1ContactUs.css";
import ContactUsForm from "../../../ContactUs/ContactUsForm";
import contactUs from "./../../../../Img/contactUs.png";
const Lp1ContactUs = () => {
  return (
    <div className="lp1ContactUs" id="contact-us">
      <div className="lp1ContactUs-Content">
        <img src={contactUs} alt="" />
      </div>
      <div className="lp1ContactUs-Content">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default Lp1ContactUs;