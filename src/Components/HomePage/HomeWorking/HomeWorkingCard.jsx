import React from "react";
import "./HomeWorking.css";
import business from "./../../../Img/HomeModule/suitcase.png";
const HomeWorkingCard = (props) => {
  return (
    <div className="homeWorkingCard">
      <div className="homeWorkingCard1" id={props.workingCardColor}>
        <div className="homeWorkingCardItem"></div>
        <img src={business} alt="" />
      </div>
      <div className="homeWorkingCard2">
        <h3>Business Requirements</h3>
        <p>
          Identify company goals and align them with your web presence to drive
          traffic, leads, and revenue.
        </p>
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
