import React from "react";
import "./LpPetsBusiness.css";
const LpPetsBusiness = () => {
  return (
    <div className="lpPetsBusiness-container" id="about-us">
      <div className="line"></div>
      <div className="lpPetsBusiness-content">
        <div className="lpPetsBusiness-heading">
          <h2>We make your business stand out</h2>
        </div>
        <div className="lpPetsBusiness-heading">
          <p>
            We work closely with our clients to know their objectives, target
            audience, unique needs, and practical digital solutions.
          </p>
        </div>
      </div>
      <div className="lpPetsBusiness-content">
        <div className="lpPetsBusiness-vidContainer">
            <img src="https://html.favdevs.com/aximo/assets/images/v1/video-bg.png" alt="" loading="lazy"/>
        </div>
        <div className="lpPetsBusiness-keyContainer">
          <ul>
            <li>
              <h3>12+</h3>
              <p>Years of experience</p>
            </li>
            <li>
              <h3>35</h3>
              <p>Successful projects</p>
            </li>
            <li>
              <h3>100%</h3>
              <p>Client satisfaction rate</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LpPetsBusiness;
