import React from "react";
import {
  faPeopleArrows,
  faHashtag,
  faIndianRupeeSign,
  faThumbsUp,
  faPhoneVolume,
  faPieChart,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SocialMediaServiceBenefits = () => {
  const card = [
    {
      id: 1,
      icon: faPeopleArrows,
      title: "Increased Brand Awareness",
      description:
        "Social media platforms provide a vast audience for small businesses to showcase their products or services. By maintaining an active presence, you can increase brand visibility and recognition.",
    },
    {
      id: 2,
      icon: faHashtag,
      title: "Targeted Marketing",
      description:
        "Social media platforms allow businesses to target specific demographics, interests, and behaviors. This ensures that your marketing efforts reach the most relevant audience.",
    },
    {
      id: 3,
      icon: faIndianRupeeSign,
      title: "Cost-Effective",
      description:
        "Social media advertising is often more cost-effective than traditional advertising channels. Small businesses with limited budgets can still achieve significant results through targeted ads.",
    },
    {
      id: 4,
      icon: faThumbsUp,
      title: "Engagement and Interaction",
      description:
        "Social media fosters engagement and interaction with your audience. Responding to comments, messages, and feedback can help build relationships and trust with customers.",
    },
    {
      id: 5,
      icon: faPhoneVolume,
      title: "Lead Generation",
      description:
        "Many social platforms offer lead generation tools, helping businesses gather valuable contact information for potential customers.",
    },
    {
      id: 5,
      icon: faPieChart,
      title: "Measurable Results",
      description:
        "Social media marketing provides detailed analytics, enabling businesses to measure the performance of their campaigns and adjust strategies accordingly.",
    },
    {
      id: 5,
      icon: faEarthAmerica,
      title: "Global Reach",
      description:
        "Social media has a global reach, allowing small businesses to expand their customer base beyond their immediate locality.",
    },
  ];

  return (
    <div className="seoServiceBenefits-container">
      <div className="seoServiceBenefit-head">
        <h2>Benefits of Social Media Marketing Services</h2>
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

export default SocialMediaServiceBenefits;
