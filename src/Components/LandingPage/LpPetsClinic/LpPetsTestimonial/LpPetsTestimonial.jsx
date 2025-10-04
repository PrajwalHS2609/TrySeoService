import React from "react";
import "./LpPetsTestimonial.css";
import rating from "./../../../../Img/rating.png";
const LpPetsTestimonial = () => {
  const card = [
    {
      id: 1,
      title: "Super customer service",
      description:
        "Excellent customer service and I was really impressed and happy with my purchase especially as it was a last minute order which got to me in time, and when it arrived I was very happy with the design and size and so was the recipient.",
      name: "William Jack",
      designation: "",
    },
    {
      id: 2,
      title: "Exceptional creativity and vision",
      description:
        "Working Mthemeus was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they perfectly captures our essence & has become instantly recognizable. We couldn't be happier the results!",
      name: "Smith Align",
      designation: "",
    },
    {
      id: 3,
      title: "Innovative and professional",
      description:
        "I can't say enough good things about them. Their team is not only incredibly talented but also highly professional. They listened to our ideas and brought to life in ways we couldn't have imagined. Their innovative approach and dedication to our project.",
      name: "Milano Joe ",
      designation: "",
    },
    {
      id: 4,
      title: "Transformed our brand",
      description:
        "Our partnership with Mthemeus transformed our brand from ordinary to extraordinary. Their branding expertise and design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition.",
      name: "Danial Mark",
      designation: "",
    },
  ];
  return (
    <div className="lpPetTest-container">
      <div className="line"></div>
      <h2>Clients are always satisfied with us</h2>
      <div className="lpPetTest-content">
        {card.map((x) => (
          <div className="lpPetTest-cardContainer">
            <div className="lpPetTest-cardContent">
              <span className="lpPetTest-cardIcon">
                <img src={rating} alt="rating" />
              </span>
            </div>
            <div className="lpPetTest-cardContent">
              <h3>{x.title}</h3>
            </div>
            <div className="lpPetTest-cardContent">
              <p>{x.description}</p>
            </div>
            <div className="lpPetTest-cardContent">
              <h4>{x.name}</h4>
              <p>{x.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LpPetsTestimonial;
