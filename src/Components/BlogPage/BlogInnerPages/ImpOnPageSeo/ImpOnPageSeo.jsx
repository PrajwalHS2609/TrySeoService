import React from "react";
import ImpOnPageSeoHead from "./ImpOnPageSeoHead";
import ImpOnPageSeoUnderstand from "./ImpOnPageSeoUnderstand";
import ImpOnPageSeoWhy from "./ImpOnPageSeoWhy/ImpOnPageSeoWhy";
import ImpOnPageSeoContinuous from "./ImpOnPageSeoContinuous";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";
import ExploreImg from "../ExploreSEO/ExploreImg/ExploreImg";
import impOnPgSeo from "./../../../../Img/Blog/Blogbanner/Importance of On-page SEO Optimization for Website.png";

const ImpOfPageSeo = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <ImpOnPageSeoHead />
      <ExploreImg img={impOnPgSeo} alt="impOnPgSeo" />

      <ImpOnPageSeoUnderstand />
      <ImpOnPageSeoWhy />
      <ImpOnPageSeoContinuous />
    </div>
  );
};

export default ImpOfPageSeo;
