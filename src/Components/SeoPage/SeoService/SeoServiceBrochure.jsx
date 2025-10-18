import React from "react";
import "./SeoService.css";
import { IoDownloadOutline } from "react-icons/io5";

const SeoServiceBrochure = () => {
  return (
    <div className="seoServiceBrochure-container">
      <div className="seoServiceBrochure-content">
        <img
          src="https://tryseoservices.com/static/media/SEOMag.ab1026738264bd2a7057.png"
          alt=""
        />
      </div>
      <div className="seoServiceBrochure-content">
        <a href="">
          <div className="seoServiceBrochure-item">
            <p>Download Brochure</p>{" "}
            <IoDownloadOutline className="seoServiceBrochure-icon" />
          </div>
          {/* <div className="seoServiceBrochure-item"></div> */}
        </a>
      </div>
    </div>
  );
};

export default SeoServiceBrochure;
