import React, { useRef, useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import menuBar from "./../../Img/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
  faX,
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  let [drop, setDrop] = useState(false);
  let dropRefHome = useRef();
  let dropRef = useRef();
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
  let handleDropDown = () => {
    if (!drop) {
      setDrop(true);
      dropRef.current.style.display = "flex";
      dropRefHome.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef.current.style.display = "none";
      dropRefHome.current.style.display = "none";
      console.log("up");
    }
  };
  const countryCode =
    localStorage.getItem("preferredCountry")?.toLowerCase() || "";

  return (
    <div className="menuContainer">
      <div className="menuContainerList">
        <li>
          <NavLink
            to={`/${countryCode}`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/${countryCode}/website-designing-services-in-bangalore`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Website
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/${countryCode}/seo-services-in-bangalore`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            SEO
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/${countryCode}/google-ads-service-in-bangalore`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Google Ads
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/${countryCode}/social-media-marketing-services-in-bangalore`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Social Media Marketing
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/${countryCode}/content-writing-service-in-bangalore`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Content Writing
          </NavLink>
        </li>
        <li>
          <span className={({ isActive }) => (isActive ? "active" : "")}>
            Other Services
            <FontAwesomeIcon
              icon={faChevronDown}
              className="menuNavDropIcon"
            ></FontAwesomeIcon>
          </span>
          <div className="dropDown" ref={dropRef}>
            <li>
              <NavLink
                to={`/${countryCode}/payment-gateway-service-in-bangalore`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Payment Gateway
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${countryCode}/email-marketing-service-in-bangalore`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Email Marketing
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to={`/${countryCode}/sms-and-whatsapp-marketing-services-in-bangalore`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                SMS & WhatsApp Marketing
              </NavLink>
            </li>
          </div>
        </li>
        <li>
          <NavLink
            to={`/${countryCode}/contact-us`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
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
              <NavLink
                id="menuNavLink"
                to={`/${countryCode}`}
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>{" "}
            </li>
            <li className="">
              {" "}
              <NavLink
                id="menuNavLink"
                onClick={hideSideBar}
                to={`/${countryCode}/website-designing-services-in-bangalore`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Website{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>
            </li>
            <li className="">
              {" "}
              <NavLink
                id="menuNavLink"
                onClick={hideSideBar}
                to={`/${countryCode}/seo-services-in-bangalore`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                SEO{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>
            </li>
            <li className="">
              {" "}
              <NavLink
                id="menuNavLink"
                onClick={hideSideBar}
                to={`/${countryCode}/google-ads-service-in-bangalore`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Google Ads{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>
            </li>
            <li className="">
              {" "}
              <NavLink
                id="menuNavLink"
                onClick={hideSideBar}
                to={`/${countryCode}/social-media-marketing-services-in-bangalore`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Social Media Marketing{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>
            </li>
            <li className="">
              {" "}
              <NavLink
                id="menuNavLink"
                onClick={hideSideBar}
                to={`/${countryCode}/content-writing-service-in-bangalore`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Content Writing{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>
            </li>
            <li className="">
              {" "}
              <span>
                Other Service{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                  onClick={handleDropDown}
                ></FontAwesomeIcon>
              </span>
              <div className="respDropDown" ref={dropRefHome}>
                <li>
                  <NavLink
                    id="menuNavLink"
                    onClick={hideSideBar}
                    to={`/${countryCode}/payment-gateway-service-in-bangalore`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Payment Gateway{" "}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="menuNavDropIcon"
                    ></FontAwesomeIcon>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    id="menuNavLink"
                    onClick={hideSideBar}
                    to={`/${countryCode}/email-marketing-service-in-bangalore`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Email Marketing{" "}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="menuNavDropIcon"
                    ></FontAwesomeIcon>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    id="menuNavLink"
                    onClick={hideSideBar}
                    to={`/${countryCode}/sms-and-whatsapp-marketing-services-in-bangalore`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    SMS Marketing{" "}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="menuNavDropIcon"
                    ></FontAwesomeIcon>
                  </NavLink>
                </li>
              </div>
            </li>
            <li className="">
              {" "}
              <NavLink
                id="menuNavLink"
                to={`/${countryCode}/contact-us`}
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
