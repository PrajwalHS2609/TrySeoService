import React from "react";
import "./HomePricing.css";
import BasicPlanCard from "./BasicPlanCard";
import PremiumPlanCard from "./PremiumPlanCard";
import EcommercePlanCard from "./EcommercePlanCard";
const HomePricingMain = () => {
  return (
    <div className="homePricingMain">
      <BasicPlanCard />
      <PremiumPlanCard/>
      <EcommercePlanCard/>
    </div>
  );
};

export default HomePricingMain;
