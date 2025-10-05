import React from "react";
import "./LpPetsHeader.css";
import { FaEnvelope } from "react-icons/fa";
import arrow from "./../../../../Img/curveArrow.png";
import headerImg from "./../../../../Img/headerImg.png";
import prizma from "./../../../../Img/clients/Prizma-Academy.png";
import goodway from "./../../../../Img/clients/Goodway-Attestation.png";
import active from "./../../../../Img/clients/Activ4Pets.png";

const LpPetsHeader = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="lpPetsHeader-container" id="home">
      <div className="lpPetsHeader-wrapper">
        <div className="lpPetsHeader-content">
          <h2>Let Pet Owners Find YOU First on Google!</h2>
          <p>
            Turn your pet clinic into the top choice for local pet owners! With
            powerful SEO and Google My Business optimization, we’ll put your
            clinic on the map. Attract more walk-ins, increase trust, and see
            guaranteed results in just 30 days — backed by our 100% ROI promise.
          </p>
        </div>
        <div className="lpPetsHeader-content">
          <div className="lpPetsHeader-logoContainer">
            <div className="lpPetsHeader-logo">
              <img src={prizma} alt="prizma" loading="lazy" />
            </div>
            <div className="lpPetsHeader-logo">
              <img src={goodway} alt="goodway" />
            </div>
            <div className="lpPetsHeader-logo">
              <img src={active} alt="active 4 pets" />
            </div>
          </div>
          <p>Believed by small business owners</p>
        </div>
        <div className="lpPetsHeader-content">
          <div className="lpPetsHeader-item">
            <a href="tel:6360226773">
              {" "}
              <button onClick={handlePopUp}>
                Book a free consultation
                <span>
                  <FaEnvelope className="lpPetsHeader-icon" />
                </span>
              </button>
            </a>
          </div>
          <div className="lpPetsHeader-item">
            <img src={arrow} alt="arrow" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="lpPetsHeader-wrapper">
        <div className="lpPetsHeader-imgContainer">
          <img src={headerImg} alt="headerImg" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default LpPetsHeader;
