import React from "react";
import "./HomeAboutUs.css";
import HomeAboutUsCard from "./HomeAboutUsCard";
import { GiStumpRegrowth } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";

const HomeAboutUsWrapper = () => {
  return (
    <div className="homeAboutUsCardContent">
      <HomeAboutUsCard txt="Proven Growth" icon={GiStumpRegrowth} />
      <HomeAboutUsCard txt="Custom Marketing" icon={FaBullhorn} />
      <HomeAboutUsCard txt="Expert Team " icon={RiTeamFill} />
      <HomeAboutUsCard txt="Trusted Partner" icon={FaUserFriends} />
    </div>
  );
};

export default HomeAboutUsWrapper;
