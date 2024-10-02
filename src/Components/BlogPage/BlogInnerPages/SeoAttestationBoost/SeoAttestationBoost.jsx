import React from "react";
import BlogHeader from "../../BlogHeader";
import SeoAttestationBoostHead from "./SeoAttestationBoostHead";
import SeoAttestationUnlocked from "./SeoAttestationUnlocked";

const SeoAttestationBoost = () => {
  return (
    <div className="homePageContainer">
      <BlogHeader
        head="How SEO Services Can Boost Attestation Service Providers in Bangalore"
        txt="Blog"
      />
      <SeoAttestationBoostHead />
      <SeoAttestationUnlocked/>
    </div>
  );
};

export default SeoAttestationBoost;
