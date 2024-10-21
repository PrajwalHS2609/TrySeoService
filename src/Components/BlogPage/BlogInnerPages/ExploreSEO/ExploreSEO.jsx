import React from "react";
import ExploreHead from "./ExploreHead/ExploreHead";
import ExploreSeoOptimize from "./ExploreSeoOptimize/ExploreSeoOptimize";
import ExploreSEOHeader from "./ExploreSEOHeader";
import ExploreImg from "./ExploreImg/ExploreImg";
import explore from "./../../../../Img/Blog/Blogbanner/Explore SEO Strategies for Optimizing eCommerce Stores.png";
import { Helmet } from "react-helmet-async";

const ExploreSEO = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>Explore SEO Strategies for Optimizing eCommerce Stores </title>
        <meta
          name="description"
          content=""
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/explore-seo-strategies-for-optimizing-ecommerce-stores"
        />
      </Helmet>
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <ExploreHead />
      <ExploreImg img={explore} alt="explore" />
      <ExploreSeoOptimize />
    </div>
  );
};

export default ExploreSEO;
