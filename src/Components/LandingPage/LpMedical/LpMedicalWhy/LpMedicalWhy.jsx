import React from "react";
import "./LpMedicalWhy.css";
import medical from "./../../../../Img/lpMedical/Why/bar-chart.png";
import record from "./../../../../Img/lpMedical/Why/marketing-research.png";
import customize from "./../../../../Img/lpMedical/Why/customized.png";
import multi from "./../../../../Img/lpMedical/Why/digital-advertising.png";
import ethical from "./../../../../Img/lpMedical/Why/ethicalCampaign.png";
import localSeo from "./../../../../Img/lpMedical/Why/local-seo.png";
import endtoend from "./../../../../Img/lpMedical/Why/endtoend.png";
import result from "./../../../../Img/lpMedical/Why/result.png";
import support from "./../../../../Img/lpMedical/Why/support.png";

const LpMedicalWhy = () => {
  const card = [
    {
      id: 1,
      img: medical,
      title: "Data-Driven Strategies",
      description:
        "We use advanced analytics to identify the right patient segments, ensuring your marketing efforts reach those who need your services most.",
    },
    {
      id: 2,
      img: record,
      title: "Boost Patient Footfalls",
      description:
        "Through targeted SEO, Google Ads, and social media campaigns, we help increase daily consultations and test bookings for measurable growth.",
    },
    {
      id: 3,
      img: customize,
      title: "Customized Marketing Plans",
      description:
        "Every diagnostics center is unique. We craft strategies tailored to your services, specialties, and goals.",
    },
    {
      id: 4,
      img: multi,
      title: "Transparent Reporting",
      description:
        "Stay informed with clear, actionable reports showing how our campaigns are converting clicks into appointments.",
    },
    {
      id: 5,
      img: ethical,
      title: "Ethical & Compliant Campaigns",
      description:
        "We adhere to healthcare advertising guidelines, maintaining your center’s credibility and trustworthiness.",
    },
    {
      id: 6,
      img: localSeo,
      title: "Local SEO Expertise",
      description:
        "We ensure your center ranks higher in local searches, helping patients in your vicinity find you first.",
    },
    {
      id: 7,
      img: endtoend,
      title: "End-to-End Marketing Support",
      description:
        "From online visibility to patient engagement, we manage every aspect of your digital marketing.",
    },
    {
      id: 8,
      img: result,
      title: "Proven Results",
      description:
        "Clinics and diagnostics centers partnering with us see consistent growth in patient inquiries, appointments, and brand trust.",
    },
    {
      id: 9,
      img: support,
      title: "Dedicated Support",
      description:
        "Our expert team works closely with you to optimize strategies and deliver guaranteed outcomes.",
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
