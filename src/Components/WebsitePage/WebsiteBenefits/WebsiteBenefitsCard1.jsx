import React from "react";
import "./WebsiteBenefits.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WebsiteBenefitsCard1 = (props) => {
  return (
    <div className="websiteBenefitsCard">
      <div className="websiteBenefitsCard-Content1">
        <img src={props.img} alt={props.alt} loading="lazy" />
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
        <button>GET IN TOUCH</button>
      </div>
      <div className="websiteBenefitsCard1-Content3">
        <h2>{props.number}</h2>
      </div>
    </div>
  );
};

export default WebsiteBenefitsCard1;
