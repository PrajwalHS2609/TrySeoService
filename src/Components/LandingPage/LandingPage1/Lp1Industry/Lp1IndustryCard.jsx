import React from "react";
import "./Lp1Industry.css";
const Lp1IndustryCard = (props) => {
  return (
    <div className="lp1IndustryCard">
      <img
        src="https://img.freepik.com/free-photo/plant-picture-clean-room-equipment-stainless-steel-machines_645730-704.jpg?t=st=1731754138~exp=1731757738~hmac=64fca3b0e33b82cf655413663846ec8754b79b1946f999809e8172d6fd24730b&w=360"
        alt=""
        loading="lazy"
      />
      <div className="lp1IndustryCardCover">
        <div className="lp1IndustryCardCover-Content">
          <h4>{props.head}</h4>
          <p>
            Novos achieved comprehensive search visibility at the national
            <small>optimization seo</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lp1IndustryCard;
