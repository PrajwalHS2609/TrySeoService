import React from "react";
import BlogHeader from "../../BlogHeader";
import SeoServiceToursHead from "./SeoServiceToursHead";
import SeoServiceToursUnlock from "./SeoServiceToursUnlock";

const SeoServiceTours = () => {
  return (
    <div className="homePageContainer">
      <BlogHeader txt="Blog" />
      <SeoServiceToursHead />
      <SeoServiceToursUnlock />
    </div>
  );
};

export default SeoServiceTours;
