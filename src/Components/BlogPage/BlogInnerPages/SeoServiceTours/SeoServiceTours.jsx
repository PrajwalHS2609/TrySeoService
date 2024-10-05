import React from "react";
import SeoServiceToursHead from "./SeoServiceToursHead";
import SeoServiceToursUnlock from "./SeoServiceToursUnlock";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";
import ExploreImg from "../ExploreSEO/ExploreImg/ExploreImg";
import seoTour from "./../../../../Img/Blog/Blogbanner/Exploring the Top SEO Services to Boost Tours & Travel Service Providers in Bangalore.png";

const SeoServiceTours = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <SeoServiceToursHead />
      <ExploreImg img={seoTour} alt="seoTour" />

      <SeoServiceToursUnlock />
    </div>
  );
};

export default SeoServiceTours;
