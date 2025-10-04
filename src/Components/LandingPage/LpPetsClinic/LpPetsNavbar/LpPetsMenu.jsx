import React from "react";
import "./LpPetsNavbar.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faX } from "@fortawesome/free-solid-svg-icons";
import { NavHashLink } from "react-router-hash-link";
import menuBar from "./../../../../Img/menu.png";

const LpPetsMenu = () => {
  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");

    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(100%)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(100%)";
  };
  return (
    <div className="lpPetsMenu-container">
      <div className="lpPetsMenu-content">
        <ul>
          <li>
            <NavHashLink to="#home">Home</NavHashLink>
          </li>
          <li>
            <NavHashLink to="#services">Services</NavHashLink>
          </li>
          <li>
            <NavHashLink to="#about-us">About Us</NavHashLink>
          </li>
          <li>
            <NavHashLink to="#testimonial">Testimonials</NavHashLink>
          </li>
          <li>
            <NavHashLink to="#contact-us">Contact Us</NavHashLink>
          </li>
        </ul>
        <div className="navBtn-container">
          <a href="https://api.whatsapp.com/send?phone=916360226773">
            <button>
              <FaWhatsapp className="navBtn-icon" />
              Message Us
            </button>
          </a>
        </div>
      </div>
      <div className="respMenuBar">
        <img src={menuBar} alt="menuBar" onClick={showSideBar} />
      </div>
      <div className="respMenu">
        <div className="innerRespMenu">
          {" "}
          <FontAwesomeIcon
            icon={faX}
            className="closeX"
            onClick={hideSideBar}
          ></FontAwesomeIcon>
          <div className="innerMenu">
            <li className="">
              <NavHashLink
                id="menuNavLink"
                to="#Header"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavHashLink>{" "}
            </li>
            <li className="">
              <NavHashLink
                id="menuNavLink"
                to="#service"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Services
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavHashLink>{" "}
            </li>
            <li className="">
              <NavHashLink
                id="menuNavLink"
                to="#about-us"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About Us
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavHashLink>{" "}
            </li>
            <li className="">
              <NavHashLink
                id="menuNavLink"
                to="#testimonial"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Testimonials
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavHashLink>{" "}
            </li>

            <li className="">
              <NavHashLink
                id="menuNavLink"
                to="#contact-us"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavHashLink>{" "}
            </li>
            <div className="respBtn-container">
              <a href="https://api.whatsapp.com/send?phone=916360226773">
                <button>
                  <FaWhatsapp className="respBtn-icon" />
                  Message Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpPetsMenu;
