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
import { Helmet } from "react-helmet-async";

const LongTailKeywords = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>
          The Power of Long-Tail Keywords: How to Find and Use Them{" "}
        </title>
        <meta
          name="description"
          content="The Power of Long-Tail Keywords: How to Find and Use Them? They are also highly competitive and less likely to convert into sales or leads."
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/the-power-of-long-tail-keywords-how-to-find-and-use-them"
        />
      </Helmet>
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
