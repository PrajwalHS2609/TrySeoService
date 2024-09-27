import React from "react";
import GoogleBusiness from "./GoogleBusiness";
import OnPageSeo from "./OnPageSeo";
import LocalSeo from "./LocalSeo";
import CitySeo from "./CitySeo";
import StateSeo from "./StateSeo";
import NationalSeo from "./NationalSeo";

const SeoPricingMain = () => {
  return (
    <div id="homePricingMain">
      <GoogleBusiness />
      <OnPageSeo/>
      <LocalSeo/>
      <CitySeo/>
      <StateSeo/>
      <NationalSeo/>
    </div>
  );
};

export default SeoPricingMain;
