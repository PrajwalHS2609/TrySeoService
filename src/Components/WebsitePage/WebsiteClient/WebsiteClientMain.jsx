import React, { useEffect, useState } from "react";
import "./WebsiteClient.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import newLyf from "./../../../Img/clients/NewLyf-OverSeas.png";
import prizma from "./../../../Img/clients/Prizma-Academy.png";
import unichrone from "./../../../Img/clients/Unichrone.png";
import goodway from "./../../../Img/clients/Goodway-Attestation.png";
import gvg from "./../../../Img/clients/DrGVG-Aesthetic-Clinics.png";
import active4 from "./../../../Img/clients/Activ4Pets.png";
import kingsClub from "./../../../Img/clients/Kings-Club.png";
import boutique from "./../../../Img/clients/Mayukha-Boutique.png";
import rbc from "./../../../Img/clients/RBC-Paramedical-College.png";
import arra from "./../../../Img/clients/Arrasuites.png";
import mm from "./../../../Img/clients/MM.png";
import scent from "./../../../Img/clients/Scent.png";
import buildurspace from "./../../../Img/clients/BuildUrSpace.png";

const WebsiteClientMain = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [showDots, setShowDots] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth > 768); // Adjust the width as needed
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="websiteClientMain">
      <div className="websiteClientMainContent">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={showDots}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="1s ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <div className="item">
              <img src={newLyf} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src={prizma} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src={unichrone} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src={goodway} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src={gvg} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src={active4} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src={kingsClub} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src={boutique} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src={rbc} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src={arra} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src={mm} alt="" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src={scent} alt="scent" loading="lazy" />
            </div>
          </div>
          <div>
            <div className="item">
              <img src={buildurspace} alt="buildurspace" loading="lazy" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default WebsiteClientMain;
