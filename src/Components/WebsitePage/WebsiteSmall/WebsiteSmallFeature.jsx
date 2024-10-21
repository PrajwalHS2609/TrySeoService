import React from "react";
import dot from "./../../../Img/dot.png";

const WebsiteSmallFeature = () => {
  return (
    <div className="OnPageSeoWhy">
      <h5>Features Included in Our Website Design in Bangalore at Rs.10000</h5>
      <p>
        Our Website Design in Bangalore at Rs.10000 includes all the essential
        features you need for a successful online presence. Here's what you can
        expect:
      </p>
      <ul>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Increased Visibility:{" "}
          </span>
          <p>
            Customized Design: We tailor your website to your specific brand and
            industry, ensuring it stands out from the competition.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={dot} alt="dot" />
            Mobile Optimization:{" "}
          </span>
          <p>
            In today’s mobile-driven world, a responsive design is critical. We
            make sure your site is mobile-friendly.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={dot} alt="dot" />
            Content Management System (CMS):{" "}
          </span>
          <p>
            We integrate user-friendly CMS platforms like WordPress, making it
            easy for you to update and manage your site content.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={dot} alt="dot" />
            SEO Setup:{" "}
          </span>
          <p>
            Your website will be designed with the latest SEO practices in mind,
            giving you a solid foundation for search engine rankings.
          </p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Basic On-Page Optimization:{" "}
          </span>
          <p>
            We include basic SEO setups like meta tags, alt tags, and keyword
            integration to ensure your website is search engine ready.
          </p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Social Media Integration:{" "}
          </span>
          <p>
            Easily link your social media profiles to your website to boost your
            online visibility.
          </p>
        </li>
        <li>
          <span>
            <img src={dot} alt="dot" />
            Contact Forms:{" "}
          </span>
          <p>
            We include fully functional contact forms to capture leads and allow
            easy communication with your customers.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WebsiteSmallFeature;
