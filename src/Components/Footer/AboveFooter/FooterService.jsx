import React from "react";
import "./../Footer.css";
import { NavLink } from "react-router-dom";
const FooterService = () => {
  return (
    <div className="footerService">
      <h4>Services</h4>
      <li>
        <NavLink
          to="/seo-services-in-bangalore"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          SEO
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/google-ads-service-in-bangalore"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Google Ads
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/website-designing-services-in-bangalore"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Website Developments
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/content-writing-service-in-bangalore"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Content Writing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/social-media-marketing-services-in-bangalore"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Social Media Marketing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Blog{" "}
        </NavLink>
      </li>
    </div>
  );
};

export default FooterService;
