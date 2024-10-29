import React from "react";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";
import ExploreImg from "../ExploreSEO/ExploreImg/ExploreImg";
import { Helmet } from "react-helmet-async";
import TopTenReasonsPoints from "./TopTenReasonsPoints";
import Top10Reasons from "./../../../../Img/Blog/Blogbanner/Google SearchTop 10 Reasons Why Every Business Needs an SEO Audit Engine Positioning.png";

const TopTenReasons = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>Top 10 Reasons Why Every Business Needs an SEO Audit </title>
        <meta
          name="description"
          content="Top 10 Reasons Why Every Business Needs an SEO Audit. Effectiveness of your current SEO strategy and identifies areas for improvement."
        />
        <link
          rel="canonical"
          href="https://tryseoservices.com/top-10-reasons-why-every-business-needs-an-seo-audit"
        />
      </Helmet>
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <ExploreImg img={Top10Reasons} alt="Top10Reasons" />
      <TopTenReasonsPoints />
    </div>
  );
};

export default TopTenReasons;
