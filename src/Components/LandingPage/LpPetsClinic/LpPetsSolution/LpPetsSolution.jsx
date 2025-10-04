import React from "react";
import "./LpPetsSolution.css";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { LuSearchCheck } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const LpPetsSolution = () => {
  const card = [
    {
      id: 1,
      icon: <MdOutlineDesignServices/>,
      title: "Website Design",
      description: "Create a professional, pet-friendly website that builds trust, showcases your clinic’s services, and helps pet owners book appointments with ease. Tailored designs to attract more visitors and increase footfalls.",
      link: "/",
    },
    {
      id: 2,
      icon: <LuSearchCheck/>,
      title: "SEO",
      description: "Boost your pet clinic’s visibility in local searches with expert Local SEO. Help pet owners nearby find you first on Google and increase walk-ins with targeted, result-driven optimization.",
      link: "/",
    },
    {
      id: 3,
      icon: <FaGoogle/>,
      title: "Google My Business",
      description: "Optimize your Google My Business profile to attract more local pet owners. Showcase your services, reviews, and location perfectly to drive more visits and calls to your clinic.",
      link: "/",
    },
    {
      id: 4,
      icon: <IoShareSocialOutline/>,
      title: "Social Media",
      description: "Engage with pet owners where they spend most of their time! Our social media strategies build trust, showcase your clinic’s care, and attract more furry friends to your doors.",
      link: "/",
    },
  ];
  return (
    <div className="lpPetSol-container">
      <h2>We provide effective digital solutions</h2>
      <div className="lpPetSol-content">
        {card.map((x) => (
          <div className="lpPetSol-cardContainer">
            <div className="lpPetSol-cardContent">
              <span className="lpPetSol-cardIcon">{x.icon}</span>
            </div>
            <div className="lpPetSol-cardContent">
              <h3>{x.title}</h3>
            </div>
            <div className="lpPetSol-cardContent">
              <p>
            {x.description}
              </p>
            </div>
            <div className="lpPetSol-cardContent">
              <Link to={x.link}>
                {" "}
                <FaArrowRight className="lpPetSol-cardIco" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LpPetsSolution;
