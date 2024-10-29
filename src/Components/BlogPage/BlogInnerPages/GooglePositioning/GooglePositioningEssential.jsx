import React from "react";
import dot from "./../../../../Img/dot.png";

const GooglePositioningEssential = () => {
  return (
    <div className="exploreSeoOptimizing">
      <h3>Don’t Forget Technical SEO Essentials</h3>
      <p>
        While Google search engine positioning focuses on page-specific
        improvements, overall site health is crucial for lasting success. Make
        sure your website:
      </p>
      <li>
        <ul>
          <li>
            <span>
              <img src={dot} alt="dot" /> Loads quickly on both desktop and
              mobile devices, as speed is a ranking factor.
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>
              <img src={dot} alt="dot" /> Is mobile-responsive, especially as
              mobile devices account for over 50% of searches.
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>
              <img src={dot} alt="dot" /> Meets Core Web Vitals standards,
              including loading time, interactivity, and visual stability.
            </span>
          </li>
        </ul>
        <p>
          A technically sound site improves user experience, supporting both SEO
          and positioning efforts for better, sustained rankings.
        </p>
      </li>
    </div>
  );
};

export default GooglePositioningEssential;
