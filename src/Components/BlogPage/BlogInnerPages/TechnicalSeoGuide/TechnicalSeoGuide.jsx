import React from "react";
import TechnicalSeoGuideHead from "./TechnicalSeoGuideHead";
import TechnicalSeoGuideAdvice from "./TechnicalSeoGuideAdvice";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";

const TechnicalSeoGuide = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <TechnicalSeoGuideHead />
      <TechnicalSeoGuideAdvice />
    </div>
  );
};

export default TechnicalSeoGuide;
