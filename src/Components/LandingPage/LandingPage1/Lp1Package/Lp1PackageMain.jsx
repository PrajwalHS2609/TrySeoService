import React from "react";
import "./Lp1Package.css";
import Lp1GooglePackageCard from "./Lp1GooglePackageCard";
import Lp1LocalPackageCard from "./Lp1LocalPackageCard";
import Lp1CityPackageCard from "./Lp1CityPackageCard";

const Lp1PackageMain = () => {
  return (
    <div className="lp1PackageMain">
      <Lp1GooglePackageCard />
      <Lp1LocalPackageCard />
      <Lp1CityPackageCard/>
    </div>
  );
};

export default Lp1PackageMain;
