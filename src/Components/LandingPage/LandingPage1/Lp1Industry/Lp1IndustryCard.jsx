import React from "react";
import "./Lp1Industry.css";
const Lp1IndustryCard = (props) => {
  return (
    <div className="lp1IndustryCard">
      <img
        src="http://obour.themezinho.net/wp-content/uploads/2020/07/case08.jpg"
        alt=""
      />
      <div className="lp1IndustryCardCover">
        <div className="lp1IndustryCardCover-Content">
          <h4>{props.head}</h4>
          <p>Novos achieved comprehensive search visibility at the national
            <small>optimization seo</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lp1IndustryCard;
