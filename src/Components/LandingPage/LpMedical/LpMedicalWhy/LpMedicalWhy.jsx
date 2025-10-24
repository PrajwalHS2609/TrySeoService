import React from "react";
import "./LpMedicalWhy.css";
import medical from "./../../../../Img/lpMedical/Why/bar-chart.png";
import record from "./../../../../Img/lpMedical/Why/marketing-research.png";
import transparent from "./../../../../Img/lpMedical/Why/live-chat.png";
import multi from "./../../../../Img/lpMedical/Why/digital-advertising.png";
import expertise from "./../../../../Img/lpMedical/Why/marketing-research.png";

const LpMedicalWhy = () => {
  const card = [
    {
      id: 1,
      img: medical,
      title: "Medical-Driven Approach",
      description:
        "We specialize in the medical niche, using data-driven insights  from the industry to deliver measurable and impactful results.",
    },
    {
      id: 2,
      img: record,
      title: "Proven Track Record",
      description:
        "With a history of driving growth for clinics and hospitals worldwide, our strategies are tried, tested, and tailored to your success.",
    },
    {
      id: 3,
      img: transparent,
      title: "Transparent Communication",
      description:
        "You’ll never be left in the dark. We provide clear, detailed reports—daily, weekly, and monthly—along with open, ongoing communication.",
    },
    {
      id: 4,
      img: multi,
      title: "Multi-Platform Expertise",
      description:
        "We market your clinic on the platforms that matter most—Google, YouTube, Facebook, and Instagram—ensuring maximum reach and engagement.",
    },
    {
      id: 5,
      img: expertise,
      title: "Compliance Expertise",
      description:
        "Advertising in the medical space is tricky, but we know the rules. Our expertise ensures your campaigns stay compliant with platform policies, avoiding costly bans.",
    },
  ];
  return (
    <div className="lpMedicalWhy-container">
      <div className="lpMedicalWhy-content">
        <h2>
          Custom Strategies to <span>Boost Your Reach</span>
        </h2>
        <p>
          We begin by analyzing your diagnostic’s unique services, challenges,
          and opportunities, crafting a customized strategy designed
          specifically to achieve your growth goals.
        </p>
      </div>
      <div className="lpMedicalWhy-content">
        {card.map((x) => (
          <div className="lpMedicalWhy-card" key={x.id}>
            <div className="lpMedicalWhy-cardContent">
              <img src={x.img} alt={x.title} />
            </div>
            <div className="lpMedicalWhy-cardContent">
              <h3>{x.title}</h3>
              <p>{x.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LpMedicalWhy;
