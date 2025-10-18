import React from "react";
import { NavLink } from "react-router-dom";

const SeoSideBarLinks = () => {
  const countryCode =
    localStorage.getItem("preferredCountry")?.toLowerCase() || "";

  return (
    <div className="seoSideBarLinks">
      <li>
        <NavLink
          to={`/${countryCode}`}end
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
  );
};

export default SeoSideBarLinks;
