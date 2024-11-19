import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faClock,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
const ContentMarketing = () => {
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
            icon={faLink}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>
          <div className="nestedPgContent">
            <h4>Attract Backlinks</h4>
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faClock}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>{" "}
          <div className="nestedPgContent">
            <h4>Create Valuable Content</h4>
          </div>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faUsers}
            className="lp1ServiceIcon"
          ></FontAwesomeIcon>{" "}
          <div className="nestedPgContent">
            <h4> Audience Focused Content</h4>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContentMarketing;
