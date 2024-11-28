import React from "react";
import SeoReasonsHead from "./SeoReasonsHead";
import SeoReasonMain from "./SeoReasonMain";
import "./SeoReasons.css";
const SeoReasons = () => {
  return (
    <div className="websiteWhy">
      <SeoReasonsHead />
      <div className="websiteWhyContent">
        <SeoReasonMain />
      </div>
    </div>
  );
};

export default SeoReasons;
