import React from "react";
import SeoServiceToursHead from "./SeoServiceToursHead";
import SeoServiceToursUnlock from "./SeoServiceToursUnlock";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";

const SeoServiceTours = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <SeoServiceToursHead />
      <SeoServiceToursUnlock />
    </div>
  );
};

export default SeoServiceTours;
