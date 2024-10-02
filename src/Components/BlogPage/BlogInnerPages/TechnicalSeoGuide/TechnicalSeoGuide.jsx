import React from "react";
import BlogHeader from "../../BlogHeader";
import TechnicalSeoGuideHead from "./TechnicalSeoGuideHead";
import TechnicalSeoGuideAdvice from "./TechnicalSeoGuideAdvice";

const TechnicalSeoGuide = () => {
  return (
    <div className="homePageContainer">
      <BlogHeader
        head="Explore SEO Strategies for Optimizing eCommerce Stores"
        txt="Blog"
      />
      <TechnicalSeoGuideHead />
      <TechnicalSeoGuideAdvice />
    </div>
  );
};

export default TechnicalSeoGuide;
