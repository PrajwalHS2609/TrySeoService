import React from "react";
import "./WebsiteHowIt.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const WebsiteHowItCard = (props) => {
  return (
    <div className="websiteHowItCard">
      <div className={props.num} id="howItWorksNo">
        <h6>{props.no}</h6>
      </div>
      <div className="websiteHowItCardImg">
        <FontAwesomeIcon
          icon={props.icon}
          className={props.classNameIco}
          id={props.idIco}
        ></FontAwesomeIcon>
      </div>
      <h3>{props.head}</h3>
      <p>{props.para}</p>
    </div>
  );
};

export default WebsiteHowItCard;
