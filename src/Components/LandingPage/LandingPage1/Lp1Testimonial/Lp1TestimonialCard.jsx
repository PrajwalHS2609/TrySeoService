import React from "react";
import "./Lp1Testimonial.css";
const Lp1TestimonialCard = (props) => {
  return (
    <div className="lp1TestimonialCard">
      <img src={props.img} alt={props.img} loading="lazy"/>
      <div className="lp1TestimonialCardCover">
        <div className="lp1TestimonialCardCover-Content">
          {" "}
          <p>{props.para}</p>
          <span>
            <h5>{props.client}</h5>
            <p> {props.designation}</p>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Lp1TestimonialCard;
