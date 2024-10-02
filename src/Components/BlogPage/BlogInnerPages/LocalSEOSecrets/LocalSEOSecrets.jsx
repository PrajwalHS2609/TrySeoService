import React from "react";
import LocalSEOSecretsHead from "./LocalSEOSecretsHead";
import Quote from "./Quote/Quote";
import BlogHeader from "../../BlogHeader";
import LocalSeoChapter from "./LocalSeoChapter";

const LocalSEOSecrets = () => {
  return (
    <div className="homePageContainer">
      <BlogHeader
        head="Local SEO Secrets: Get Ahead in Your Hometown"
        txt="Blog"
      />
      <LocalSEOSecretsHead />
      <Quote />
      <LocalSeoChapter/>
    </div>
  );
};

export default LocalSEOSecrets;
