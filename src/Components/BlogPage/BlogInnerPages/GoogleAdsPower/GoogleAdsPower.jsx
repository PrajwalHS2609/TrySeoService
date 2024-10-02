import React from "react";
import BlogHeader from "../../BlogHeader";
import GoogleAdsPowerHead from "./GoogleAdsPowerHead";
import GoogleAdsPowerReason from "./GoogleAdsPowerReason";
import GoogleAdsPowerUnlocking from "./GoogleAdsPowerUnlocking";

const GoogleAdsPower = () => {
  return (
    <div className="homePageContainer">
      <BlogHeader
        head="Power of Google Ads: Why It’s Essential for Your Business"
        txt="Blog"
      />
      <GoogleAdsPowerHead/>
      <GoogleAdsPowerReason/>
      <GoogleAdsPowerUnlocking/>
    </div>
  );
};

export default GoogleAdsPower;
