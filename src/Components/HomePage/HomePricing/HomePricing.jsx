import React from "react";
import "./HomePricing.css";
import HomePricingHeader from "./HomePricingHeader";
import HomePricingMain from "./HomePricingMain";
const HomePricing = () => {
  return (
    <div className="homePricingContainer" id="pricing">
      <HomePricingHeader />
      <HomePricingMain/>
    </div>
  );
};

export default HomePricing;
