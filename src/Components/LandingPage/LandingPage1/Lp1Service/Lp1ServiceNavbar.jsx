import React from "react";
import "./Lp1Service.css";
import { NavLink } from "react-router-dom";
import rightArrow from "./../../../../Img/right-arrow.png";
const Lp1ServiceNavbar = () => {
  return (
    <div className="lp1ServiceNavbar">
      <li>
        <NavLink
          to={"/lp/nested-page1"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          <img src={rightArrow} alt="rightArrow" /> SEO Audit
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/lp/nested-page2"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          <img src={rightArrow} alt="rightArrow" /> Keyword Research
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/lp/nested-page3"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          <img src={rightArrow} alt="rightArrow" /> Content Marketing
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/lp/nested-page4"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          <img src={rightArrow} alt="rightArrow" /> Competitor Analysis
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/lp/nested-page5"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          <img src={rightArrow} alt="rightArrow" /> SEO Reporting
        </NavLink>
      </li>
    </div>
  );
};

export default Lp1ServiceNavbar;
