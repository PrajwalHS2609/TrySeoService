import React from "react";
import "./HomeMarquee.css";
import Marquee from "react-fast-marquee";
const HomeMarquee = () => {
  return (
    <div className="seoMarquee">
      <Marquee loop={0}>
        <div className="seoMarqueeContent">
          <h2>Business Solutions</h2>
          <span>•</span>
          <h2>Analysis</h2>
          <span>•</span>
          <h2>SEO </h2>
          <span>•</span>
          <h2>Marketing</h2>
          <span>•</span>
          <h2>Digital</h2>
          <span>•</span>
          <h2>Agency</h2>
          <span>•</span>
          <h2>Digital Marketing</h2>
          <span>•</span>
          <h2>Business Solutions</h2>
          <span>•</span>
          <h2>Marketing Strategy </h2>
          <span>•</span>
        </div>
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
