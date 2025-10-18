import React from "react";
import "./HomeAboutUs.css";

const HomeAboutUsCard = ({ icon: Icon, txt }) => {
  return (
    <div className="homeAboutUsCard">
      {Icon && <Icon className="homeAboutUsCard-icon" />}{" "}
      {/* ✅ render icon component */}
      <h5>{txt}</h5>
    </div>
  );
};

export default HomeAboutUsCard;
