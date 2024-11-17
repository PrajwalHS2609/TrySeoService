import React from "react";
import "./Lp1Testimonial.css";
import Lp1TestimonialCard from "./Lp1TestimonialCard";
import newLyf from "./../../../../Img/Lp/Testimonials/newLyf.png";
import gvg from "./../../../../Img/Lp/Testimonials/gvg.png";
import nisarga from "./../../../../Img/Lp/Testimonials/nisarga.png";
import activPets from "./../../../../Img/Lp/Testimonials/activpets.png";

const Lp1TestimonialMain = () => {
  return (
    <div className="lp1TestimonialMain">
      <Lp1TestimonialCard
        img={newLyf}
        para="TrySeoService is one of the greatest solutions for generating a high return on investment for my business at a low cost across all Digital Media Platforms. For more than a year, the TrySeoService team managed our PPC advertising and content marketing. We are really pleased with the return on investment and the results. They are quick to incorporate suggestions and strive to offer more than what they promise. Looking forward to collaborating with them again! "
        client="Dr.Vinit Kumar"
        designation="Managing Director of New-Lyf"
      />
      <Lp1TestimonialCard
        img={gvg}
        para="Exceptional service and outstanding results! The team at TrySEOServices.Com has truly transformed our online presence at DrGVG Aesthetics Clinic. Their tailored SEO strategies significantly boosted our visibility, bringing in more patients and enhancing trust in our services. The professionalism, dedication, and expertise they bring to the table are unparalleled. Highly recommend TrySEOServices.Com for any clinic looking to grow online!"
        client="Dr. Gunasekar Vuppalapati"
        designation="DrGVG Aesthetics Clinic"
      />
      <Lp1TestimonialCard
        img={nisarga}
        para="Outstanding SEO services that deliver results! TrySEOServices.Com has been instrumental in enhancing the online presence of Nisarga Diagnostics. Their customized strategies have significantly improved our search rankings, driving more traffic to our website and helping patients find us easily. The team’s expertise, professionalism, and dedication to understanding our needs set them apart. I highly recommend TrySEOServices.Com to any healthcare provider aiming to grow their digital reach effectively!"
        client="Dr. Srinivas Prasad "
        designation="Diagnostics"
      />
      <Lp1TestimonialCard
        img={activPets}
        para="Exceptional SEO expertise with remarkable results! TrySEOServices.Com has been a game-changer for Activ4Pets, helping us strengthen our online presence and connect with pet owners more effectively. Their tailored strategies, attention to detail, and deep understanding of our industry needs have boosted our visibility and engagement significantly. The team’s commitment to excellence and proactive approach make them a trusted partner for digital growth. Highly recommended!"
        client="Ashwin Chandrasekaran"
        designation="CEO"
      />
    </div>
  );
};

export default Lp1TestimonialMain;
