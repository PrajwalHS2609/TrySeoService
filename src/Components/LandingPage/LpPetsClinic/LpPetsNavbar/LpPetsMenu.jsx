import React from "react";
import "./LpPetsNavbar.css";
import { Link } from "react-router-dom";

const LpPetsMenu = () => {
  return (
    <div className="lpPetsMenu-container">
      <div className="lpPetsMenu-content">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Services</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Testimonials</Link>
          </li>
          <li>
            <Link to={"/"}>Contact Us</Link>
          </li>
        </ul>
        <div className="navBtn-container">
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default LpPetsMenu;
