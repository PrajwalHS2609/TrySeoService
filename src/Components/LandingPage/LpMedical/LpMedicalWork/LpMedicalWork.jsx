import React from "react";
import "./LpMedicalWork.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import bulb from "./../../../../Img/lpMedical/Work/light-bulb.png";
import megaphone from "./../../../../Img/lpMedical/Work/megaphone.png";
import rocket from "./../../../../Img/lpMedical/Work/rocket.png";
import cursor from "./../../../../Img/lpMedical/Work/click-cursor.png";
import review from "./../../../../Img/lpMedical/Work/good-review.png";

const LpMedicalWork = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="lpMedicalWork-container">
      <div className="lpMedicalWork-wrapper">
        <div className="lpMedicalWork-content">
          <h2>
            How we <span>Work</span>
          </h2>
          <p>
            We understand the unique challenges of running a medical practice.
            From targeting the right patients to ensuring ethical ad practices,
            we take care of everything while you focus on providing exceptional
            care.
          </p>
        </div>
        <div className="lpMedicalWork-content">
          <div className="lpMedicalWork-item">
            <img src={bulb} alt="bulb" />
            <b>Goals & Strategy</b>
          </div>
          <FaLongArrowAltRight className="lpMedicalWork-icon" />
          <div className="lpMedicalWork-item">
            <img src={cursor} alt="cursor" />
            <b>Audience & Platforms</b>
          </div>
          <FaLongArrowAltRight className="lpMedicalWork-icon" />
          <div className="lpMedicalWork-item">
            <img src={megaphone} alt="megaphone" />
            <b>Create Content & Campaigns</b>
          </div>
          <FaLongArrowAltRight className="lpMedicalWork-icon" />
          <div className="lpMedicalWork-item">
            <img src={rocket} alt="rocket" />
            <b>Launch & Track</b>
          </div>
          <FaLongArrowAltRight className="lpMedicalWork-icon" />
          <div className="lpMedicalWork-item">
            <img src={review} alt="review" />
            <b>Review & Results</b>
          </div>
        </div>
        <button class="frutiger-button">
          <div class="inner">
            <span class="text" onClick={handlePopUp}>
              BOOK NOW
            </span>
          </div>
        </button>{" "}
      </div>
    </div>
  );
};

export default LpMedicalWork;
