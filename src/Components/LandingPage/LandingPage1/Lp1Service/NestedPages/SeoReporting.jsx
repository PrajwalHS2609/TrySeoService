import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrafficLight,
  faChartLine,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
const SeoReporting = () => {
  return (
    <div className="nestedPages1">
      <h2>Complete SEO Optimization Services</h2>
      <p>
        Unlock your business's potential with premium tool: boost SEO, discover
        winning keywords, and outsmart competitors with data-driven strategies!
      </p>
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faTrafficLight}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>
          <div className="nestedPgContent">
            <h4>Website Traffic</h4>
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChartLine}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>{" "}
          <div className="nestedPgContent">
            <h4>Content Performance</h4>
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faLink}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>{" "}
          <div className="nestedPgContent">
            <h4>Backlinks</h4>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SeoReporting;
