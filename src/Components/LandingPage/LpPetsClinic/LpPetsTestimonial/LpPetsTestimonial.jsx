import React from "react";
import "./LpPetsTestimonial.css";
import rating from "./../../../../Img/rating.png";


const LpPetsTestimonial = () => {
  const card = [
    {
      id: 1,
      title: "Super customer service",
      description:
        "Partnering with TrySEOServices.Com was a game-changer for Activ4Pets. In just 8 months, they boosted our visibility, leads, and engagement—making them a trusted partner for real online growth.",
      name: "Ashwin",
      designation: "CEO of Activ4Pets",
    },
    {
      id: 2,
      title: "Exceptional creativity and vision",
      description:
        "Petzz.org’s business performance soared after working with TrySEOServices.Com. From better rankings and quality leads to higher conversions, their SEO and Google Ads expertise drove sustainable growth. Truly a reliable partner for online visibility.",
      name: "Swetang Sharma",
      designation: "Founder of Petzz.Org",
    },
    {
      id: 3,
      title: "Innovative and professional",
      description:
        "Thanks to their expert SEO strategies, our website’s organic traffic grew to 13,000+ visitors in just one year. Their focused approach, consistent optimization, and result-driven techniques have significantly boosted our online visibility. We’re extremely happy with the results and highly recommend their services!",
      name: "Dr.Srinivas Prasad R.H ",
      designation: "Founder of Nisarga Diagnostics",
    },
    {
      id: 4,
      title: "Transformed our brand",
      description:
        "They gave our website a fresh, premium makeover and ran targeted ad campaigns that greatly boosted our online visibility. We’ve seen increased footfall across all 6 salon centers in Bangalore, and their digital marketing expertise has truly elevated our brand. Highly recommended!",
      name: "Vijay Lobo",
      designation: ", Director of SCENT",
    },
  ];
  return (
    <div className="lpPetTest-container" id="testimonial">
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
              <p>{x.description}</p>
            </div>
            <div className="lpPetTest-cardContent">
              {/* <img src={x.img} alt="" /> */}
              <div className="lpPetTest-cardItem">
               <h4>{x.name}</h4>
                <p>{x.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LpPetsTestimonial;
