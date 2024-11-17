import React from "react";
import "./Lp1Industry.css";
const Lp1IndustryCard = (props) => {
  return (
    <div className="lp1IndustryCard">
      <img src={props.img} alt="" loading="lazy" />
      <div className="lp1IndustryCardCover">
        <div className="lp1IndustryCardCover-Content">
          <h4>{props.head}</h4>
          <p>{props.para}</p>
        </div>
      </div>
    </div>
  );
};

export default Lp1IndustryCard;
