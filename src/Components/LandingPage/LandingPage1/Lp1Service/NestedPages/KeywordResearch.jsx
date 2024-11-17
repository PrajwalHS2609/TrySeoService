import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faClock,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
const KeywordResearch = () => {
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
            icon={faLightbulb}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>
          <div className="nestedPgContent">
            <h4>Keywords By Traffic</h4>
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faClock}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>{" "}
          <div className="nestedPgContent">
            <h4>Content Ideas</h4>
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChartLine}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>{" "}
          <div className="nestedPgContent">
            <h4>Competitor Keyword Analysis</h4>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default KeywordResearch;
