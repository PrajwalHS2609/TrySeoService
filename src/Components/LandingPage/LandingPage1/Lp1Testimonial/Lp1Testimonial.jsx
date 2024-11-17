import React from "react";
import "./Lp1Testimonial.css";
import Lp1TestimonialHead from "./Lp1TestimonialHead";
import Lp1TestimonialMain from "./Lp1TestimonialMain";
import WebsiteClientMain from "../../../WebsitePage/WebsiteClient/WebsiteClientMain";
const Lp1Testimonial = () => {
  return (
    <div className="lp1Testimonial" id="testimonial">
      <Lp1TestimonialHead />
      <Lp1TestimonialMain />
      <WebsiteClientMain/>
    </div>
  );
};

export default Lp1Testimonial;
