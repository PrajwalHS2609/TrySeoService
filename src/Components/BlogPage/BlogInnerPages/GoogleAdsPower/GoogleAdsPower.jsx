import React from "react";
import GoogleAdsPowerHead from "./GoogleAdsPowerHead";
import GoogleAdsPowerReason from "./GoogleAdsPowerReason";
import GoogleAdsPowerUnlocking from "./GoogleAdsPowerUnlocking";
import ExploreSEOHeader from './../ExploreSEO/ExploreSEOHeader';

const GoogleAdsPower = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <GoogleAdsPowerHead />
      <GoogleAdsPowerReason />
      <GoogleAdsPowerUnlocking />
    </div>
  );
};

export default GoogleAdsPower;
