import React from "react";
import checked from "./../../../../Img/check-mark.png";
import "./OnPageSeoWhy.css";
const OnPageSeoWhy = () => {
  return (
    <div className="OnPageSeoWhy">
      <h5>Why Choose On-Page SEO Services in Bangalore?</h5>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Higher Search Engine Rankings:{" "}
          </span>
          <p>
            By optimizing your website’s content and structure, On-Page SEO
            Services in Bangalore can significantly improve your search engine
            rankings, making it easier for potential customers to find you
            online.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Improved User Experience:{" "}
          </span>
          <p>
            Good on-page SEO practices not only help search engines understand
            your content but also improve the user experience. This leads to
            lower bounce rates and higher engagement levels.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Targeted Traffic:{" "}
          </span>
          <p>
            With the right keywords and content strategies, On-Page SEO Services
            in Bangalore help you attract targeted traffic that is more likely
            to convert into customers.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Increased Conversions:{" "}
          </span>
          <p>
            An optimized website that provides value to users can lead to
            increased conversions, whether that means more sales, sign-ups, or
            inquiries.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default OnPageSeoWhy;
