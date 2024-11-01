import React from "react";
import point from "./../../../Img/point.png";

const SeoInPuneIndustries = () => {
  return (
    <div className="OnPageSeoWhy">
      <h5>Industries in Pune That Benefit from SEO Services</h5>
      <p>
        SEO can benefit any business, but some of the top sectors in Pune that
        can gain a competitive edge with SEO services in Pune include:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Real Estate:{" "}
          </span>
          <p>
            Pune’s real estate industry is booming, and SEO can help agencies
            attract clients searching for properties in specific neighborhoods.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Education:{" "}
          </span>
          <p>
            As a hub for education, schools and coaching centers can use SEO to
            reach students and parents.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Healthcare:{" "}
          </span>
          <p>
            Clinics, hospitals, and health practitioners can benefit from SEO by
            capturing patients searching for services “near me.”
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            E-commerce:{" "}
          </span>
          <p>
            SEO allows local and regional e-commerce businesses to reach a
            broader audience, drive traffic, and increase sales.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default SeoInPuneIndustries;
