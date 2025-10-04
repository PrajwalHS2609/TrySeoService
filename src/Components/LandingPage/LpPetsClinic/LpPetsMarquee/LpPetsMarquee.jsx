import React from "react";
import Marquee from "react-fast-marquee";
import "./LpPetsMarquee.css";
import { FaAsterisk } from "react-icons/fa";

const LpPetsMarquee = () => {
  return (
    <div className="lpPetsMarquee-container">
      <Marquee loop={0}>
        <div className="lpPetsMarquee-content">
          <h2>Business Solutions</h2>
          <span>
            <FaAsterisk />
          </span>
          <h2>Analysis</h2>
          <span>
            <FaAsterisk />
          </span>
          <h2>SEO </h2>
          <span>
            <FaAsterisk />
          </span>
          <h2>Marketing</h2>
          <span>
            <FaAsterisk />
          </span>
          <h2>Digital</h2>
          <span>
            <FaAsterisk />
          </span>
          <h2>Agency</h2>
          <span>
            <FaAsterisk />
          </span>
          <h2>Digital Marketing</h2>
          <span>
            <FaAsterisk />
          </span>
          <h2>Business Solutions</h2>
          <span>
            <FaAsterisk />
          </span>
          <h2>Marketing Strategy </h2>
          <span>
            <FaAsterisk />
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default LpPetsMarquee;
