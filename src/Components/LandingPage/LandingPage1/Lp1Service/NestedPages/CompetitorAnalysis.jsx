import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faIdCard,
  faIdBadge,

} from "@fortawesome/free-solid-svg-icons";
const CompetitorAnalysis = () => {
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
            icon={faChartBar}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>
          <div className="nestedPgContent">
            <h4> Analyzing their keyword strategy</h4>
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faIdCard}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>{" "}
          <div className="nestedPgContent">
            <h4>Assessing their backlink profile</h4>
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faIdBadge}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>{" "}
          <div className="nestedPgContent">
            <h4>Identifying opportunities</h4>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CompetitorAnalysis;
