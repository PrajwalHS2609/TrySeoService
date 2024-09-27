import React from "react";
import "./HomeTestimonial.css";
import HomeSqAnim from "../HomeSqAnim";
import HomeTestimonialCarousel from "./HomeTestimonialCarousel";
import HomeTestimonialHeader from "./HomeTestimonialHeader";
const HomeTestimonial = () => {
  return (
    <div className="homeTestimonial">
      <HomeTestimonialHeader />
      <div className="sqAnimContainer">
        <HomeSqAnim />
      </div>
      <div className="testimonialContainer">
        <HomeTestimonialCarousel />
      </div>
    </div>
  );
};

export default HomeTestimonial;
