import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import doc from "./../../../../Img/doc1.jpg";
import "./LpMedicalHeader.css";
const LpMedicalHeader = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="lpMedicalHeader-container">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel-container"
      >
        <Carousel.Item className="carousel-item">
          <img src={doc} alt="header-img" />
          <div className="lpMedicalHeader-cover">
            <div className="lpMedicalHeader-content">
              <h6>Trusted & Reliable</h6>
              <h2>Better Healthcare for the World</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="lpMedicalHeader-btn">
                <button class="frutiger-button" onClick={handlePopUp}>
                  <div class="inner">
                    <span class="text">BOOK YOUR SESSION</span>
                  </div>
                </button>{" "}
                <a href="tel:6360226773">GET CALLBACK </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img src={doc} alt="header-img" />

          <div className="lpMedicalHeader-cover">
            <div className="lpMedicalHeader-content">
              <h6>Trusted & Reliable</h6>
              <h2>Better Healthcare for the World</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="lpMedicalHeader-btn">
                <button class="frutiger-button" onClick={handlePopUp}>
                  <div class="inner">
                    <span class="text">BOOK YOUR SESSION</span>
                  </div>
                </button>
                <a href="tel:6360226773">GET CALLBACK </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default LpMedicalHeader;
