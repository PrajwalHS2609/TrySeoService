import React from "react";
import "./LpMedicalIndustry.css";
import hair from "./../../../../Img/lpMedical/Industry/skin.png";
import plastic from "./../../../../Img/lpMedical/Industry/plastic-surgery.png";
import ortho from "./../../../../Img/lpMedical/Industry/pain-in-joints.png";
import hospital from "./../../../../Img/lpMedical/Industry/hospital.png";
import ivf from "./../../../../Img/lpMedical/Industry/fertilization.png";
import tooth from "./../../../../Img/lpMedical/Industry/implant.png";
import surgery from "./../../../../Img/lpMedical/Industry/surgery.png";
import diagnostic from "./../../../../Img/lpMedical/Industry/diagnostic-tool.png";

const LpMedicalIndustry = () => {
  const card = [
    { id: 1, img: hair, title: "Hair Restoration" },
    { id: 2, img: plastic, title: "Plastic Surgery" },
    { id: 3, img: ortho, title: "Orthopaedic" },
    { id: 4, img: hospital, title: "Multispecialty Clinics & Hospitals" },
    { id: 5, img: ivf, title: "IVF & Fertility" },
    { id: 6, img: tooth, title: "Dental Care" },
    { id: 7, img: surgery, title: "Cosmetic Surgery and Aesthetics" },
    { id: 8, img: diagnostic, title: "Diagnostic Imaging" },
  ];
  return (
    <div className="lpMedicalIndustry-container">
      <div className="lpMedicalIndustry-content">
        <h2>
          We drive marketing success in the <span>Medical Industry</span>
        </h2>
        <p>
          At Revolo, we’ve perfected the art of marketing for the medical
          sector. We understand the unique challenges and opportunities your
          industry presents and craft strategies tailored to your needs.
        </p>
        <b>
          No matter your specialty, we deliver results-driven solutions to help
          your practice thrive. Whether you're in.
        </b>
      </div>
      <div className="lpMedicalIndustry-content">
        {card.map((x) => (
          <div className="lpMedicalIndustry-card" key={x.id}>
            <img src={x.img} alt={x.title} />
            <h5>{x.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LpMedicalIndustry;
