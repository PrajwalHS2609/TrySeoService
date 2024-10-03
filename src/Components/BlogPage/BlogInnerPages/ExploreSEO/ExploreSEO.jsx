import React from "react";
import ExploreHead from "./ExploreHead/ExploreHead";
import ExploreSeoOptimize from "./ExploreSeoOptimize/ExploreSeoOptimize";
import ExploreSEOHeader from "./ExploreSEOHeader";

const ExploreSEO = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <ExploreHead />
      <ExploreSeoOptimize />
    </div>
  );
};

export default ExploreSEO;
