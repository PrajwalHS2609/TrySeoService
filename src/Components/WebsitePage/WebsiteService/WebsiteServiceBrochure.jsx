import React from 'react'
import "./WebsiteService.css";

import { IoDownloadOutline } from "react-icons/io5";

const WebsiteServiceBrochure = () => {
  return (
    <div className="websiteServiceBrochure-container">
      <div className="websiteServiceBrochure-content">
        <img
          src="https://tryseoservices.com/static/media/WebsiteDesign.866771fb3a2ba7f2063f.png"
          alt=""
        />
      </div>
      <div className="websiteServiceBrochure-content">
        <a href="">
          <div className="websiteServiceBrochure-item">
            <p>Download Brochure</p>{" "}
            <IoDownloadOutline className="websiteServiceBrochure-icon" />
          </div>
          {/* <div className="websiteServiceBrochure-item"></div> */}
        </a>
      </div>
    </div>
  )
}

export default WebsiteServiceBrochure
