import React from "react";
import "./HomeWorking.css";
import HomeWorkingCard from "./HomeWorkingCard";
import {
  faBriefcase,
  faBinoculars,
  faMapLocationDot,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
const HomeWorkingMain = () => {
  return (
    <div className="homeWorkingMain">
      <HomeWorkingCard
        workingCardColor="colorOrange"
        workingStepsColor="colorBlue"
        steps="Step1"
        head="Business Requirements"
        para="Identify the company goals and how they relate to the Web presence to drive more positive and desired results for your business, like traffic, leads, and revenue."
        cardIcon={faBriefcase}
      />
      <HomeWorkingCard
        workingCardColor="colorBlue"
        workingStepsColor="colorOrange"
        steps="Step2"
        head="Competitor Analysis"
        para="It’s a process of researching and analyzing the marketing strategies of the companies operating in a given market. What other brands in your niche are doing to acquire and retain customers."
        cardIcon={faBinoculars}
      />
      <HomeWorkingCard
        workingCardColor="colorOrange"
        workingStepsColor="colorBlue"
        steps="Step3"
        head="Building Road Map"
        para="Acts as a solid foundation for all your online marketing efforts. It lets you plot a course for optimal growth and lays out the exact tactics to enable you to reach your goals."
        cardIcon={faMapLocationDot}
      />
      <HomeWorkingCard
        workingCardColor="colorBlue"
        workingStepsColor="colorOrange"
        steps="Step4"
        head="Launching Your 1st Campaign"
        para="Setting campaign goals and objectives, Defining your target audience, Identifiying distribution channels, Allocating Budget, Tracking & Reporting."
        cardIcon={faPlaneDeparture}
      />
      <div className="homeWorkingMainLine"></div>
    </div>
  );
};

export default HomeWorkingMain;
