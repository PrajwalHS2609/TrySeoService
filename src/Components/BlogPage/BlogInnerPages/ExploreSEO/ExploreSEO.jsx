import React from "react";
import ExploreHead from "./ExploreHead/ExploreHead";
import ExploreSeoOptimize from "./ExploreSeoOptimize/ExploreSeoOptimize";
import ExploreSEOHeader from "./ExploreSEOHeader";
import ExploreImg from "./ExploreImg/ExploreImg";
import explore from "./../../../../Img/Blog/Blogbanner/Explore SEO Strategies for Optimizing eCommerce Stores.png"

const ExploreSEO = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <ExploreHead />
      <ExploreImg img={explore} alt="explore"/>
      <ExploreSeoOptimize />
    </div>
  );
};

export default ExploreSEO;
