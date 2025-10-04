import React from "react";
import LpPetsHeader from "./LpPetsHeader/LpPetsHeader";
import LpPetsNavbar from "./LpPetsNavbar/LpPetsNavbar";
import LpPetsSolution from "./LpPetsSolution/LpPetsSolution";
import LpPetsBusiness from "./LpPetsBusiness/LpPetsBusiness";
import LpPetsContact from "./LpPetsContact/LpPetsContact";
import LpPetsFooter from "./LpPetsFooter/LpPetsFooter";
import LpPetsComp from "./LpPetsComp/LpPetsComp";
import LpPetsProcess from "./LpPetsProcess/LpPetsProcess";
import LpPetsMarquee from "./LpPetsMarquee/LpPetsMarquee";
import LpPetsTestimonial from "./LpPetsTestimonial/LpPetsTestimonial";

const LpPetsClinic = () => {
  return (
    <div>
      <LpPetsNavbar />
      <LpPetsHeader />
      <LpPetsSolution />
      <LpPetsBusiness />
      <LpPetsComp />
      <LpPetsProcess />
      <LpPetsMarquee />
      <LpPetsTestimonial />
      <LpPetsContact />
      <LpPetsFooter />
    </div>
  );
};

export default LpPetsClinic;
