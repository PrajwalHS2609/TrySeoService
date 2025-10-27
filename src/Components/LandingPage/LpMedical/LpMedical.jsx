import React from "react";
import LpMedicalNavbar from "./LpMedicalNavbar/LpMedicalNavbar";
import LpMedicalHeader from "./LpMedicalHeader.jsx/LpMedicalHeader";
import LpMedicalHow from "./LpMedicalHow/LpMedicalHow";
import LpMedicalFooter from "./LpMedicalFooter/LpMedicalFooter";
import LpMedicalWork from "./LpMedicalWork/LpMedicalWork";
import LpMedicalClient from "./LpMedicalClient/LpMedicalClient";
import LpMedicalWhy from "./LpMedicalWhy/LpMedicalWhy";
import LpMedicalBook from "./LpMedicalBook/LpMedicalBook";
import LpMedicalContact from "./LpMedicalContact/LpMedicalContact";
import LpMedicalAcquisition from "./LpMedicalAcquisition/LpMedicalAcquisition";
import LpMedicalBusiness from "./LpMedicalBusiness/LpMedicalBusiness";

const LpMedical = () => {
  return (
    <div>
      <LpMedicalNavbar />
      <LpMedicalHeader />
      <LpMedicalClient />
      <LpMedicalHow />
      <LpMedicalBusiness />
      <LpMedicalAcquisition />
      <LpMedicalWork />
      <LpMedicalWhy />
      {/* <LpMedicalIndustry /> */}
      <LpMedicalBook />
      <LpMedicalContact />
      <LpMedicalFooter />
    </div>
  );
};

export default LpMedical;
