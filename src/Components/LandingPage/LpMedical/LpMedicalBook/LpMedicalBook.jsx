import React from "react";
import "./LpMedicalBook.css";
const LpMedicalBook = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="lpMedicalBook-container">
      <div className="lpMedicalBook-content">
        <div className="lpMedicalBook-item">
          <h2>
            Looking to Grow Your Diagnostics Center?{" "}
            <span>Schedule Your FREE Consultation Today!</span>
          </h2>
        </div>
        <div className="lpMedicalBook-item">
          <button className="frutiger-button" onClick={handlePopUp}>
            <div className="inner">
              <span className="text">Book Appointment</span>
            </div>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default LpMedicalBook;
