import React from "react";
import "./HomeWorking.css";
import HomeWorkingCard from "./HomeWorkingCard";
const HomeWorkingMain = () => {
  return (
    <div className="homeWorkingMain">
      <HomeWorkingCard
        workingCardColor="colorOrange"
        workingStepsColor="colorBlue"
        steps="Step1"
      />
      <HomeWorkingCard
        workingCardColor="colorBlue"
        workingStepsColor="colorOrange"
        steps="Step2"
      />
      <HomeWorkingCard
        workingCardColor="colorOrange"
        workingStepsColor="colorBlue"
        steps="Step3"
      />
      <HomeWorkingCard
        workingCardColor="colorBlue"
        workingStepsColor="colorOrange"
        steps="Step4"
      />
            <div className="homeWorkingMainLine"></div>

    </div>
  );
};

export default HomeWorkingMain;
