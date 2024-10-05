import React from "react";
import SeoAttestationBoostHead from "./SeoAttestationBoostHead";
import SeoAttestationUnlocked from "./SeoAttestationUnlocked";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";
import ExploreImg from "../ExploreSEO/ExploreImg/ExploreImg";
import seoAttestation from "./../../../../Img/Blog/Blogbanner/How SEO Services Can Boost Attestation Service Providers in Bangalore.png";

const SeoAttestationBoost = () => {
  return (
    <div className="homePageContainer">
       <ExploreSEOHeader head="Blog" txt="Blog" />
      <SeoAttestationBoostHead />
      <ExploreImg img={seoAttestation} alt="seoAttestation" />

      <SeoAttestationUnlocked/>
    </div>
  );
};

export default SeoAttestationBoost;
