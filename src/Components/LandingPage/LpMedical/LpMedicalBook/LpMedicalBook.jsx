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
            Need help growing your clinic? <span>Book your FREE one-on-One
            consultation today</span>
          </h2>
          <p>
            Speak with our medical marketing experts and discover how Revolo can
            help your clinic.
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
