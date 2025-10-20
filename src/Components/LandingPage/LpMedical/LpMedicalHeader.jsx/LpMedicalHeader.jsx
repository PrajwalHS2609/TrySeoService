import React from "react";
import "./LpMedicalHeader.css";
const LpMedicalHeader = () => {
  return (
    <div className="lpMedicalHeader-container">
      <img src="" alt="header img" />
      <div className="lpMedicalHeader-cover">
        <div className="lpMedicalHeader-content">
          <h6>Trusted & Reliable</h6>
          <h2>Better Healthcare for the World</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <div className="lpMedicalHeader-btn">
            <button>BOOK YOUR SESSION</button>
            <button>CALL US</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpMedicalHeader;
