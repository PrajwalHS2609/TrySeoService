import React from "react";
import GoogleAdsPowerHead from "./GoogleAdsPowerHead";
import GoogleAdsPowerReason from "./GoogleAdsPowerReason";
import GoogleAdsPowerUnlocking from "./GoogleAdsPowerUnlocking";
import ExploreSEOHeader from './../ExploreSEO/ExploreSEOHeader';
import googleAds from "./../../../../Img/Blog/Blogbanner/Power of Google Ads_ Why It’s Essential for Your Business.png"
import ExploreImg from "../ExploreSEO/ExploreImg/ExploreImg";

const GoogleAdsPower = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <GoogleAdsPowerHead />
      <ExploreImg img={googleAds} alt="googleAds"/>
      <GoogleAdsPowerReason />
      <GoogleAdsPowerUnlocking />
    </div>
  );
};

export default GoogleAdsPower;
