import React from "react";
import SeoServiceHead from "./SeoServiceHead";
import WebsiteHowItCard from "../../WebsitePage/WebsiteHowIt/WebsiteHowItCard";
import {
  faBinoculars,
  faTrafficLight,
  faHandshake,
  faLineChart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SeoService = () => {
  const card = [
    { id: 1, icon: faBinoculars, title: "Visibility & Rankings" },
    { id: 2, icon: faTrafficLight, title: "Web Traffic" },
    { id: 3, icon: faHandshake, title: "Trustworthy" },
    { id: 4, icon: faLineChart, title: "Growth" },
  ];
  return (
    <div className="seoService-container">
      {card.map((x) => (
        <div className="seoService-card" key={x.id}>
          <FontAwesomeIcon
            icon={x.icon}
            className="seoService-cardIcon"
          ></FontAwesomeIcon>{" "}
          <div className="seoService-cardContent">
            <h3>{x.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeoService;
