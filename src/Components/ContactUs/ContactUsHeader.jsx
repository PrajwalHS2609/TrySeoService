import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import BlobAnim from './../HomePage/BlobAnim';

const ContactUsHeader = () => {
  return (
    <div className="contactUsHeader">
        <div className="contactBlob">
            <BlobAnim/>
        </div>
      <h2>Contact Us</h2>
      <BreadCrumb txt="Contact Us" />
    </div>
  );
};

export default ContactUsHeader;
