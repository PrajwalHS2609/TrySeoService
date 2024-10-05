import React from "react";
import TransformingForeignHead from "./TransformingForeignHead";
import TransformingForeignEnumerate from "./TransformingForeignEnumerate";
import TransformingForeignKey from "./TransformingForeignKey";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";
import ExploreImg from "../ExploreSEO/ExploreImg/ExploreImg";
import transform from "./../../../../Img/Blog/Blogbanner/Transforming Foreign Language School of Bangalore.png";

const TransformingForeign = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
       <TransformingForeignHead />
       <ExploreImg img={transform} alt="transform" />

      <TransformingForeignEnumerate />
      <TransformingForeignKey />
    </div>
  );
};

export default TransformingForeign;
