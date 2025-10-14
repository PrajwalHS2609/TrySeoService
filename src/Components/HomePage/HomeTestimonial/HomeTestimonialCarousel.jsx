import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import quote from "./../../../Img/quotation.png";
import rating from "./../../../Img/ratingwhite.png";
const HomeTestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="homeTestimonial-CarouselContainer">
      <div className="homeTestimonial-quote">
        <img src={quote} alt="quote" />
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carouselContainer"
      >
        <Carousel.Item className="homeTestimonial-content">
          <div className="homeTestimonial-item1">
            <img src={rating} alt="rating" />
          </div>
          <div className="homeTestimonial-item2">
            <p>
              TrySeoService is a reputed name in the Digital Marketing industry.
              They have the proper knowledge and technical expertise. We got
              positive results on our company’s website within the prescribed
              time and budget. Thanks for their quick and efficient efforts!!
            </p>
            <h3>Mr. Sahil</h3>
            <span>Owner of Prizma Academy</span>
          </div>
        </Carousel.Item>
        <Carousel.Item className="homeTestimonial-content">
          <div className="homeTestimonial-item1">
            <img src={rating} alt="rating" />
          </div>
          <div className="homeTestimonial-item2">
            <p>
              I would say, TrySeoService is one of the top Digital Marketing
              companies in Bangalore offering, quality services at competitive
              pricing. It's been 3 years with them. And we are satisfied with
              their work and coordination. Highly Recommended!!
            </p>
            <h3>Mr. Sanath Roy</h3>
            <span>Owner of Arrasuites Hotel</span>
          </div>
        </Carousel.Item>
        <Carousel.Item className="homeTestimonial-content">
          <div className="homeTestimonial-item1">
            <img src={rating} alt="rating" />
          </div>
          <div className="homeTestimonial-item2">
            <p>
              Choosing TrySeoService was my best decision. Their team discovered
              and shortlisted keywords for my business, and most of the keywords
              began ranking on the top page of Google within 3–4 months.
              TrySeoService is to be commended for generating additional revenue
              for me via Google. Your SEO services are outstanding!!
            </p>
            <h3>Mr.Nagesh</h3>
            <span>Owner of GoodWay Attestation</span>
          </div>
        </Carousel.Item>
        <Carousel.Item className="homeTestimonial-content">
          <div className="homeTestimonial-item1">
            <img src={rating} alt="rating" />
          </div>
          <div className="homeTestimonial-item2">
            <p>
              TrySeoService is one of the greatest solutions for generating a
              high return on investment for my business at a low cost across all
              Digital Media Platforms. For more than a year, the TrySeoService
              team managed our PPC advertising and content marketing. We are
              really pleased with the return on investment and the results. They
              are quick to incorporate suggestions and strive to offer more than
              what they promise. Looking forward to collaborating with them
              again!
            </p>
            <h3>Dr.Vinit Kumar</h3>
            <span>Managing Director of New-Lyf</span>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeTestimonialCarousel;
