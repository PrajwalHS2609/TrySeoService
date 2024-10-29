import React from "react";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";
import GooglePositioningHead from "./GooglePositioningHead";
import googlePositioning from "./../../../../Img/Blog/Blogbanner/Google Search Engine Positioning.png";
import ExploreImg from "../ExploreSEO/ExploreImg/ExploreImg";
import { Helmet } from "react-helmet-async";
import GooglePositioningWhat from "./GooglePositioningWhat";
import GooglePositioningKey from "./GooglePositioningKey";
import GooglePositioningBenefits from "./GooglePositioningBenefits";
import GooglePositioningFinal from "./GooglePositioningFinal";
import GooglePositioningVsSeo from "./GooglePositioningVsSeo";
import GooglePositioningEssential from "./GooglePositioningEssential";

const GooglePositioning = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>
          Google Search Engine Positioning: Understanding It and Boosting Your
          Rankings{" "}
        </title>
        <meta
          name="description"
          content="Google Search Engine Positioning. This guide will introduce you to search engine positioning, why it’s essential, and strategies that can help your pages climb the rankings."
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/google-search-engine-positioning-understanding-it-and-boosting-your-rankings"
        />
      </Helmet>
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <GooglePositioningHead />
      <ExploreImg img={googlePositioning} alt="googlePositioning" />
      <GooglePositioningWhat />
      <GooglePositioningVsSeo />
      <GooglePositioningKey />
      <GooglePositioningEssential />
      <GooglePositioningBenefits />
      <GooglePositioningFinal />
    </div>
  );
};

export default GooglePositioning;
