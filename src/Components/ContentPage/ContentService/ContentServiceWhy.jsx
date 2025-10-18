import React from "react";
import {
  faArrowPointer,
  faLink,
  faBoltLightning,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContentServiceWhy = () => {
  const card = [
    { id: 1, icon: faArrowPointer, title: "Generates High CTR" },
    { id: 2, icon: faLink, title: "Generate Backlinks" },
    { id: 3, icon: faBoltLightning, title: "Enables you to Incorporate Keywords" },
    { id: 4, icon: faSmile, title: "Offers a Great User Experience" },
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

export default ContentServiceWhy;
