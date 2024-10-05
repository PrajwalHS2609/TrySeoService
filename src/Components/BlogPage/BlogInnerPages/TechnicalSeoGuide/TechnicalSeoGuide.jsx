import React from "react";
import TechnicalSeoGuideHead from "./TechnicalSeoGuideHead";
import TechnicalSeoGuideAdvice from "./TechnicalSeoGuideAdvice";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";
import ExploreImg from "../ExploreSEO/ExploreImg/ExploreImg";
import seoGuide from "./../../../../Img/Blog/Blogbanner/The Comprehensive Technical SEO Guide_ Mastering the Digital Foundation.png";

const TechnicalSeoGuide = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <ExploreImg img={seoGuide} alt="seoGuide" />

      <TechnicalSeoGuideHead />
      <TechnicalSeoGuideAdvice />
    </div>
  );
};

export default TechnicalSeoGuide;
