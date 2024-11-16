import React from "react";
import "./Lp1Industry.css";
const Lp1IndustryCard = (props) => {
  return (
    <div className="lp1IndustryCard">
      <img
        src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?t=st=1731753435~exp=1731757035~hmac=22cbf076b6a57a688e7fd1d8e6478f78a1b851414a26a2a0392dfa0e09c10b53&w=360"
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
