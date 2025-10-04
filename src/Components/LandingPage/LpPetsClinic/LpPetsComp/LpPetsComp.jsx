import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

import "./LpPetsComp.css";
const LpPetsComp = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
    <div className="lpPetsComp-container">
      <h2>Comprehensive SEO Solutions for Every Business</h2>
      <div className="lpPetsComp-content">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
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
            <div className="lpPetsComp-item">
              <img
                src="https://html.favdevs.com/aximo/assets/images/v1/project4.png"
                alt=""
                loading="lazy"
              />
              <div className="lpPetsComp-cover">
                <h3>Vet Home Visit</h3>
                <p>
                  Convenient vet home visits bring expert pet care right to your
                  doorstep, ensuring comfort for your furry friends.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="lpPetsComp-item">
              <img
                src="https://html.favdevs.com/aximo/assets/images/v1/project4.png"
                alt=""
                loading="lazy"
              />
              <div className="lpPetsComp-cover">
                <h3>Pet Grooming</h3>
                <p>
                  Keep your pets healthy, clean, and stylish with our
                  professional pet grooming services.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="lpPetsComp-item">
              <img
                src="https://html.favdevs.com/aximo/assets/images/v1/project4.png"
                alt=""
                loading="lazy"
              />
              <div className="lpPetsComp-cover">
                <h3>Pet Shop</h3>
                <p>
                  Find everything your furry friend needs at our fully stocked
                  pet shop – food, toys, and more under one roof.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="lpPetsComp-item">
              <img
                src="https://html.favdevs.com/aximo/assets/images/v1/project4.png"
                alt=""
                loading="lazy"
              />
              <div className="lpPetsComp-cover">
                <h3>Pet Surgery</h3>
                <p>
                  Expert veterinary surgeons ensuring safe, advanced, and
                  compassionate care for your pet’s health.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="lpPetsComp-item">
              <img
                src="https://html.favdevs.com/aximo/assets/images/v1/project4.png"
                alt=""
                loading="lazy"
              />
              <div className="lpPetsComp-cover">
                <h3>Pet Kennel</h3>
                <p>
                  Comfortable and secure boarding facilities to keep your pets
                  safe and happy while you’re away.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default LpPetsComp;
