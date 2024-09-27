import React from "react";
import "./WebsiteBenefits.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WebsiteBenefitsCard2 = (props) => {
  return (
    <div className="websiteBenefitsCard2">
      <div className="websiteBenefitsCard-Content1">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="websiteBenefitsCard-Content2">
        <div className="websiteBenefitsCard-Content2Img">
          <FontAwesomeIcon
            icon={props.icon}
            className="benefitsIcon"
          ></FontAwesomeIcon>{" "}
        </div>
        <h3>{props.head}</h3>
        <p>{props.para}</p>
      </div>
      <div className="websiteBenefitsCard2-Content3">
        <h2>{props.number}</h2>
      </div>
    </div>
  );
};

export default WebsiteBenefitsCard2;
