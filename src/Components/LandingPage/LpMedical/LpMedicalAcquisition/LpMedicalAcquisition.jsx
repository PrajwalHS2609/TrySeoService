import React from "react";
import "./LpMedicalAcquisition.css";
import data from "./../../../../Img/lpMedical/Acquisition/data-chart.png";
import chess from "./../../../../Img/lpMedical/Acquisition/chess.png";
import chat from "./../../../../Img/lpMedical/Acquisition/chat.png";
import nurture from "./../../../../Img/lpMedical/Acquisition/lead-nurturing.png";
import training from "./../../../../Img/lpMedical/Acquisition/online-learning.png";
import monitor from "./../../../../Img/lpMedical/Acquisition/analytics.png";

const LpMedicalAcquisition = () => {
  const card = [
    {
      id: 1,
      img: data,
      title: "Deep Dive into Your Clinic’s Strengths and Weaknesses",
      description:
        "We start by understanding your unique services, challenges, and opportunities to create a strategy tailored to your goals.",
    },
    {
      id: 2,
      img: chess,
      title: "Crafting a Customized Advertising Plan",
      description:
        "From selecting the right platforms to designing campaigns for each service, we create a roadmap that delivers real results.",
    },

    {
      id: 3,
      img: chat,
      title: "Multi-Platform Ad Execution",
      description:
        "We run highly targeted ads on platforms like Google, Instagram, Facebook, and YouTube to ensure you reach the right audience for your treatments.",
    },

    // {
    //   id: 4,
    //   img: nurture,
    //   title: "Automated Lead Nurturing Systems",
    //   description:
    //     "We set up seamless systems that automatically follow up with and nurture your leads, keeping them engaged until they’re ready to book.",
    // },
    // {
    //   id: 5,
    //   img: training,
    //   title: "Training for Handling Patient Enquiries",
    //   description:
    //     "We provide sales training to you and your team so you can confidently convert enquiries into appointments.",
    // },

    // {
    //   id: 6,
    //   img: monitor,
    //   title: "Ongoing Monitoring and Optimization",
    //   description:
    //     "We track over 160 parameters to configure your ads with precision and ensure you attract high-quality leads that actually convert.",
    // },
  ];
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="lpMedicalAcquisition-container">
      <div className="lpMedicalAcquisition-head">
        <h2>
          How <span>TrySEOServices.Com</span> Powers 30% More Patient
          Appointments?
        </h2>
        <p>
          TrySEOServices.Com drives 30% more patient appointments with smart,
          data-driven marketing. From SEO to targeted ads and social media
          campaigns, we boost visibility, attract quality leads, and grow your
          clinic’s patient base.
        </p>
        {/* <b>
          We don’t just run ads—we transform how your clinic attracts and
          converts patients.
        </b> */}
      </div>
      <div className="lpMedicalAcquisition-content">
        {card.map((x) => (
          <div className="lpMedicalAcquisition-card" key={x.id}>
            <div className="lpMedicalAcquisition-cardIcon">
              <img src={x.img} alt={x.title} />
            </div>
            <div className="lpMedicalAcquisition-para">
              <h4>{x.title}</h4>
              <p>{x.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="lpMedicalAcquisition-btnContainer">
        <button class="frutiger-button" onClick={handlePopUp}>
          <div class="inner">
            <span class="text">BOOK NOW</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LpMedicalAcquisition;
