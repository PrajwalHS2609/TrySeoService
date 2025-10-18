import React from 'react'
import "./WebsiteService.css"
import {
  faShieldHalved,
  faComputerMouse,
  faEarthAmerica,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const WebsiteServiceHow = () => {
      const card = [
        { id: 1, icon: faShieldHalved, title: "A Solid Website" },
        { id: 2, icon: faComputerMouse, title: "Usability" },
        { id: 3, icon: faEarthAmerica, title: "Build Trust" },
        { id: 4, icon: faMobileScreen, title: "Mobile Design" },
      ];
  return (
    <div className="websiteServiceHow-container">
      {card.map((x) => (
        <div className="websiteServiceHow-card" key={x.id}>
          <FontAwesomeIcon
            icon={x.icon}
            className="websiteServiceHow-cardIcon"
          ></FontAwesomeIcon>{" "}
          <div className="websiteServiceHow-cardContent">
            <h3>{x.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WebsiteServiceHow
