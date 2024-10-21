import React from "react";
import checked from "./../../../Img/check-mark.png";

const WebsiteSmallWhy = () => {
  return (
    <div className="OnPageSeoWhy">
      <h5>Why Choose Our Website Design in Bangalore at Rs.10000?</h5>
      <p>
        At TrySEOServices.com, we understand that a website is the face of your
        business in the digital world. That's why our{" "}
        <a href="https://tryseoservices.com/website-design-in-bangalore-at-rs-10000">Website Design in Bangalore at Rs.10000</a> service is
        focused on delivering websites that are not only aesthetically pleasing
        but also highly functional. Here’s why you should consider us for your
        web design needs:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Affordable Pricing:{" "}
          </span>
          <p>
            You won’t find a more competitive rate for such high-quality
            service. Our Website Design in Bangalore at Rs.10000 offers
            unmatched value.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Responsive Design:{" "}
          </span>
          <p>
            We ensure that your website looks and works beautifully across all
            devices—desktops, tablets, and smartphones.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            SEO-Friendly Structure:{" "}
          </span>
          <p>
            As experts in SEO, we design websites that are optimized for search
            engines, ensuring your site ranks well from the start.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Fast Turnaround Time:{" "}
          </span>
          <p>
            Get your business online quickly with our rapid web development
            process.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WebsiteSmallWhy;
