import React from "react";
import LocalSEOSecretsHead from "./LocalSEOSecretsHead";
import Quote from "./Quote/Quote";
import LocalSeoChapter from "./LocalSeoChapter";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";
import ExploreImg from "../ExploreSEO/ExploreImg/ExploreImg";
import localSeo from "./../../../../Img/Blog/Blogbanner/Local SEO Secrets_ Get Ahead in Your Hometown.png";

const LocalSEOSecrets = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <LocalSEOSecretsHead />
      <ExploreImg img={localSeo} alt="localSeo" />
      <Quote />
      <LocalSeoChapter />
    </div>
  );
};

export default LocalSEOSecrets;
