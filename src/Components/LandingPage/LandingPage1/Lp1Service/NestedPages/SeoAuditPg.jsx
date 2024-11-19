import React from "react";
import "./../Lp1Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNetworkWired,
  faUser,
  faLink
} from "@fortawesome/free-solid-svg-icons";
const SeoAuditPg = () => {
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
            icon={faNetworkWired}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>
          <div className="nestedPgContent">
            <h4>Website Architecture</h4>
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faUser}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>{" "}
          <div className="nestedPgContent">
            <h4>User Experience</h4>
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

export default SeoAuditPg;
