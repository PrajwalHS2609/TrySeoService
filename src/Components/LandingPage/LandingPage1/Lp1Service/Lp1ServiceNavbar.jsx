import React from "react";
import "./Lp1Service.css";
import { NavLink } from "react-router-dom";
import rightArrow from "./../../../../Img/right-arrow.png";
const Lp1ServiceNavbar = () => {
  return (
    <div className="lp1ServiceNavbar">
      <li>
        <NavLink
          to={"/lp/seo-audit"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          <img src={rightArrow} alt="rightArrow" /> SEO Audit
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/lp/keyword-research"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          <img src={rightArrow} alt="rightArrow" /> Keyword Research
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/lp/content-marketing"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          <img src={rightArrow} alt="rightArrow" /> Content Marketing
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/lp/competitor-analysis"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          <img src={rightArrow} alt="rightArrow" /> Competitor Analysis
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/lp/seo-reporting"}
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
