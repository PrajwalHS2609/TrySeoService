import React from "react";
import {
  faMagnifyingGlass,
  faRectangleAd,
  faUserSecret,
  faBrain,
  faIndianRupee,
  faWrench,
  faShoePrints,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const GoogleAdsService = () => {
  const card = [
    { id: 1, icon: faMagnifyingGlass, title: "Keyword Research and Selection" },
    { id: 2, icon: faRectangleAd, title: "Competitive Research" },
    { id: 3, icon: faUserSecret, title: "Text and Image Ads Creation" },
    { id: 4, icon: faBrain, title: "Ideas to Optimize Landing Pages" },
    { id: 5, icon: faIndianRupee, title: "PPC Cost Management" },
    {
      id: 6,
      icon: faWrench,
      title: "Ad Campaign Modification and Improvements",
    },
    { id: 7, icon: faShoePrints, title: "Conversion Tracking" },
    { id: 8, icon: faRectangleList, title: "Monthly Performance Report" },
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

export default GoogleAdsService;
