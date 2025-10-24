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
            Our <span>Approach</span>
          </h2>
          <p>
            We understand the unique challenges of managing a diagnostics
            center. From reaching the right patients to maintaining ethical
            advertising, we handle it all so you can focus on delivering
            exceptional healthcare.
          </p>
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
