import React from "react";
import "./CountryPage.css"
const CountryHeader = (props) => {
  return (
    <div className="countryHeader-container">
      <img src={props.img} alt={props.title} />
      <div className="countryHeader-cover">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default CountryHeader;
