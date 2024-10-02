import React from "react";
import BlogHeader from "../../BlogHeader";
import TransformingForeignHead from "./TransformingForeignHead";
import TransformingForeignEnumerate from "./TransformingForeignEnumerate";
import TransformingForeignKey from "./TransformingForeignKey";

const TransformingForeign = () => {
  return (
    <div className="homePageContainer">
      <BlogHeader txt="Blog" />
      <TransformingForeignHead />
      <TransformingForeignEnumerate />
      <TransformingForeignKey/>
    </div>
  );
};

export default TransformingForeign;
