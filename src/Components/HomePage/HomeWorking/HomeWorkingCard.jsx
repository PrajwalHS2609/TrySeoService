import React from "react";
import "./HomeWorking.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeWorkingCard = (props) => {
  return (
    <div className="homeWorkingCard">
      <div className="homeWorkingCard1" id={props.workingCardColor}>
        <div className="homeWorkingCardItem"></div>
        <FontAwesomeIcon
          icon={props.cardIcon}
          className="homeWorkingCardIco"
        ></FontAwesomeIcon>
      </div>
      <div className="homeWorkingCard2">
        <h3>{props.head}</h3>
        <p>{props.para}</p>
      </div>
      <div className="homeWorkingCard3">
        <div className="homeWorkingSteps" id={props.workingStepsColor}>
          <h5>{props.steps}</h5>
        </div>
      </div>
    </div>
  );
};

export default HomeWorkingCard;
