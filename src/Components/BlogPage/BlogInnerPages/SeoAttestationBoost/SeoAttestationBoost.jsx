import React from "react";
import SeoAttestationBoostHead from "./SeoAttestationBoostHead";
import SeoAttestationUnlocked from "./SeoAttestationUnlocked";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";

const SeoAttestationBoost = () => {
  return (
    <div className="homePageContainer">
       <ExploreSEOHeader head="Blog" txt="Blog" />
      <SeoAttestationBoostHead />
      <SeoAttestationUnlocked/>
    </div>
  );
};

export default SeoAttestationBoost;
