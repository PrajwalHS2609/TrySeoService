import React from "react";
import "./Lp1Package.css";
import Lp1PackageHead from "./Lp1PackageHead";
import Lp1PackageMain from "./Lp1PackageMain";
const Lp1Package = () => {
  return (
    <div className="lp1Package" id="package">
      <Lp1PackageHead />
      <Lp1PackageMain />
    </div>
  );
};

export default Lp1Package;
