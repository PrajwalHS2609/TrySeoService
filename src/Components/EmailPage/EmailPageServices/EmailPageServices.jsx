import React from "react";
import {
  faPeopleArrows,
  faEnvelope,
  faEarthAmerica,
  faBullhorn,
  faMobileScreen,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const EmailPageServices = () => {
      const card = [
        {
          id: 1,
          icon: faPeopleArrows,
          title: "Increased Traffic",
          description:
            "Because the top positions on search engine result pages acquire the majority of impressions and clicks, ranking in these positions can result in massive traffic improvements for your website.",
        },
        {
          id: 2,
          icon: faEnvelope,
          title: "Return on Investment",
          description:
            "When it comes to ROI, SEO gives trackable and quantifiable results. Our effective SEO services in Bangalore enable you to monitor almost every aspect of your SEO campaign, including rankings, traffic, and conversions.",
        },
        {
          id: 3,
          icon: faEarthAmerica,
          title: "Cost-effectiveness",
          description:
            "SEO enables you to target customers who are actively looking for your products and services online. It generates more qualified visitors than many other marketing tactics, resulting in cost savings for businesses.",
        },
        {
          id: 4,
          icon: faBullhorn,
          title: "Increased site usability",
          description:
            "SEO optimization services in Bangalore help you to make your website more navigable for visitors while also making it easier to navigate for search engines.",
        },
        {
          id: 5,
          icon: faMobileScreen,
          title: "Brand Awareness",
          description:
            "As the top position rankings generate considerable impressions, having your website in these top positions on the result pages means more visibility.",
        },
                {
          id: 6,
          icon: faDownload,
          title: "Brand Awareness",
          description:
            "As the top position rankings generate considerable impressions, having your website in these top positions on the result pages means more visibility.",
        },
      ];
  return (
    <div className="seoServiceBenefits-container">
      <div className="seoServiceBenefit-head">
        <h2>Comprehensive Email Marketing Services</h2>
      </div>
      {card.map((x) => (
        <div className="seoServiceBenefits-card" key={x.id}>
          <FontAwesomeIcon
            icon={x.icon}
            className="seoServiceBenefits-cardIcon"
          ></FontAwesomeIcon>{" "}
          <div className="seoServiceBenefits-cardContent">
            <h3>{x.title}</h3>
            <p>{x.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailPageServices;
