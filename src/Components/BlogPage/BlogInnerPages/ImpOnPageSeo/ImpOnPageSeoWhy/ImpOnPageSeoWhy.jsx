import React from "react";
import "./ImpOnPageSeoWhy.css";
import checked from "./../../../../../Img/check-mark.png";
const ImpOnPageSeoWhy = () => {
  return (
    <div className="impOnPageSeoWhy">
      <h5>Why is On-Page SEO Important?</h5>    
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Improved Search Engine Rankings:{" "}
          </span>
          <p>
            On-page SEO techniques, such as optimizing meta tags, headings, and
            content, can significantly improve your website’s search engine
            rankings. When your website ranks higher in search results, it
            becomes more visible to potential visitors.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Enhanced User Experience:{" "}
          </span>
          <p>
            On-page SEO is not just about pleasing search engines; it’s also
            about creating a better user experience. Pages that load quickly,
            have easy navigation, and provide valuable content are more likely
            to keep visitors engaged.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Higher Organic Traffic:{" "}
          </span>
          <p>
            When your website ranks higher for relevant keywords, you’ll
            naturally attract more organic traffic. Organic traffic refers to
            visitors who find your website through search engines without paid
            advertising.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Cost-Effective Marketing:{" "}
          </span>
          <p>
            On-page SEO is a cost-effective marketing strategy compared to paid
            advertising. Once your pages are optimized, they can continue to
            attract organic traffic over time without ongoing costs.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Credibility and Trust:{" "}
          </span>
          <p>
            Websites that appear at the top of search results are often
            perceived as more trustworthy and credible by users. On-page SEO can
            help establish your website’s authority in your niche.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Better Conversion Rates:{" "}
          </span>
          <p>
            Well-optimized pages tend to have better conversion rates. When
            users find what they’re looking for easily and trust your website,
            they are more likely to take the desired action, whether it’s making
            a purchase, filling out a contact form, or subscribing to your
            newsletter.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ImpOnPageSeoWhy;
