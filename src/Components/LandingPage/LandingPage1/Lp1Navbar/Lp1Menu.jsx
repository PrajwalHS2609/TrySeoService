import React from "react";
import "./Lp1Navbar.css";
import menuBar from "./../../../../Img/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { NavHashLink } from "react-router-hash-link";
const Lp1Menu = () => {

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
  // let handleDropDown = () => {
  //   if (!drop) {
  //     setDrop(true);
  //     dropRef.current.style.display = "flex";
  //     dropRefHome.current.style.display = "flex";
  //     console.log("down");
  //   } else {
  //     setDrop(false);
  //     dropRef.current.style.display = "none";
  //     dropRefHome.current.style.display = "none";
  //     console.log("up");
  //   }
  // };
  return (
    <div className="lp1MenuContainer">
      <div className="lp1MenuContainerList">
        <li>
          <NavHashLink
            to="#Header"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#service"
            smooth
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Services
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#about-us"
            smooth
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About Us
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#sectors"
            smooth
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Sectors We Work
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#testimonial"
            smooth
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Testimonials
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#package"
            smooth
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Packages
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            to="#contact-us"
            smooth
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact Us
          </NavHashLink>
        </li>
      </div>
      {/* ---------------------------respMenu------------------------------ */}
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
                to="#sectors"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sectors We Work
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
                to="#package"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Packages
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lp1Menu;
