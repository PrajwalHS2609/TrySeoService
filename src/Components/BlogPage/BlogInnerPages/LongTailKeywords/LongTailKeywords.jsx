import React from "react";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";
import ExploreImg from "../ExploreSEO/ExploreImg/ExploreImg";
import LongTailKeywordsHead from "./LongTailKeywordsHead";
import longTail from "./../../../../Img/Blog/Blogbanner/Long-Tail Keywords-Banner.png";
import LongTailKeywordsWhat from "./LongTailKeywordsWhat";
import LongTailKeywordsEx from "./LongTailKeywordsEx";
import LongTailKeywordsWhy from "./LongTailKeywordsWhy";
import LongTailKeywordsHow from "./LongTailKeywordsHow";
import LongTailKeywordsHowUse from "./LongTailKeywordsHowUse";

const LongTailKeywords = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <LongTailKeywordsHead />
      <ExploreImg img={longTail} alt="longTail" />
      <LongTailKeywordsWhat />
      <LongTailKeywordsEx />
      <LongTailKeywordsWhy />
      <LongTailKeywordsHow />
      <LongTailKeywordsHowUse />
    </div>
  );
};

export default LongTailKeywords;
