import React from "react";
import LocalSEOSecretsHead from "./LocalSEOSecretsHead";
import Quote from "./Quote/Quote";
import LocalSeoChapter from "./LocalSeoChapter";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";

const LocalSEOSecrets = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <LocalSEOSecretsHead />
      <Quote />
      <LocalSeoChapter />
    </div>
  );
};

export default LocalSEOSecrets;
