import React from "react";
import "./LpMedicalNavbar.css";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { IoMenu } from "react-icons/io5";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faChevronDown,
  faX,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
const LpMedicalMenu = () => {
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
    <div className="menuContainer">
      <div className="menuContainerWrapper">
        <li>
          <Link to={"/"} smooth>
            Home
          </Link>
        </li>
        <li>
          <NavHashLink to={"#services"} smooth>
            {" "}
            Services
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to={"#aboutUs"} smooth>
            {" "}
            About Us
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to={"#testimonials"} smooth>
            Testimonials
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to={"#contactUs"} smooth>
            Contact Us
          </NavHashLink>
        </li>
      </div>
      <div className="lpMedical-respMenuBar">
        <IoMenu onClick={showSideBar}className="lpMedicalMenuIcon" />
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
              <a id="menuLink" href="tel:6362946008" onClick={hideSideBar}>
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
                +91 6362946008{" "}
              </a>{" "}
            </li>
            <li className="">
              {" "}
              <Link id="menuLink" onClick={hideSideBar} to={"/"}>
                Home{" "}
              </Link>
            </li>
            <li className="respDropDown">
              {" "}
              <NavHashLink to={"#services"} smooth onClick={hideSideBar}>
                Services{" "}
              </NavHashLink>{" "}
            </li>
            <li className="">
              {" "}
              <NavHashLink
                id="menuLink"
                onClick={hideSideBar}
                to={"#aboutUs"}
              >
                About Us
              </NavHashLink>
            </li>
            <li className="">
              {" "}
              <NavHashLink
                id="menuLink"
                onClick={hideSideBar}
                to={"#testimonial"}
              >
                Testimonials{" "}
              </NavHashLink>
            </li>
            <li className="">
              {" "}
              <NavHashLink
                id="menuLink"
                onClick={hideSideBar}
                to={"#contactUs"}
              >
                Contact Us
              </NavHashLink>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpMedicalMenu;
