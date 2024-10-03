import React from "react";
import TransformingForeignHead from "./TransformingForeignHead";
import TransformingForeignEnumerate from "./TransformingForeignEnumerate";
import TransformingForeignKey from "./TransformingForeignKey";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";

const TransformingForeign = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
       <TransformingForeignHead />
      <TransformingForeignEnumerate />
      <TransformingForeignKey />
    </div>
  );
};

export default TransformingForeign;
