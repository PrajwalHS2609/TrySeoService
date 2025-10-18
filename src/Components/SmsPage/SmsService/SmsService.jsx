import React from "react";
import SmsServiceHead from "./SmsServiceHead";
import WebsiteHowItCard from "../../WebsitePage/WebsiteHowIt/WebsiteHowItCard";
import {
  faPenToSquare,
  faUsersLine,
  faRectangleAd,
  faLineChart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SmsService = () => {
  const card = [
    { id: 1, icon: faPenToSquare, title: "Campaign Creation" },
    { id: 2, icon: faUsersLine, title: "Segmentation" },
    { id: 3, icon: faRectangleAd, title: "A/B Testing" },
    { id: 4, icon: faLineChart, title: "Analytics and Reporting" },
  ];
  return (
    <div className="seoService-container">
      <h2>Comprehensive SMS & WhatsApp Marketing Services</h2>
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

export default SmsService;
