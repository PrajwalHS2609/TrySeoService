import React from "react";
import "./HomeAboutUs.css";
import HomeAboutUsCard from "./HomeAboutUsCard";

const HomeAboutUsWrapper = () => {
  return (
    <div className="homeAboutUsCardContent">
      <HomeAboutUsCard txt="Amazing communication." />
      <HomeAboutUsCard txt="Best trending designing." />
      <HomeAboutUsCard txt="Get quality Lead click." />
      <HomeAboutUsCard txt="Mitigate Business Policy." />
    </div>
  );
};

export default HomeAboutUsWrapper;
