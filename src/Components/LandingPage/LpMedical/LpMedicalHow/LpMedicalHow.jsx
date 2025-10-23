import React from "react";
import "./LpMedicalHow.css";
import technical from "./../../../../Img/lpMedical/How/technical-support.png";
import localSeo from "./../../../../Img/lpMedical/How/local-seo.png";
import keyword from "./../../../../Img/lpMedical/How/keyword.png";
import link from "./../../../../Img/lpMedical/How/link-building.png";
import onpage from "./../../../../Img/lpMedical/How/on-page-seo.png";
import ecommerce from "./../../../../Img/lpMedical/How/ecommerce.png";

const LpMedicalHow = () => {
  const card = [
    {
      id: 1,
      img: technical,
      title: "Technical SEO",
      description:
        "We resolve any technical issues on your website that could hinder its performance. From improving website speed to ensuring mobile compatibility, we make your site easier for search engines to crawl and index, enhancing your rankings and user experience.",
    },
    {
      id: 2,
      img: localSeo,
      title: "Local SEO",
      description:
        "For healthcare businesses that serve specific locations, we specialize in local SEO to help your practice show up in local search results. We also optimize and manage your Google My Business profile to enhance visibility and attract more patients from your region.",
    },

    {
      id: 3,
      img: keyword,
      title: "Keyword Research",
      description:
        "At ClinicSpots, we identify the most relevant and high-performing keywords for your healthcare services. By targeting the terms your patients are searching for, we ensure that your website ranks higher in search results, helping you attract more potential patients.",
    },

    {
      id: 4,
      img: onpage,
      title: "On-Page SEO",
      description:
        "We optimize your website's content to make it more user-friendly and search engine-friendly. This includes updating page titles, descriptions, and content to align with the keywords that matter most for your healthcare practice, improving your visibility and engagement.",
    },
    {
      id: 5,
      img: link,
      title: "Link Building",
      description:
        "ClinicSpots helps build a strong backlink profile for your healthcare website by obtaining links from reputable and relevant websites. This not only boosts your site's authority but also improves your rankings on search engines, bringing in more qualified leads.",
    },

    {
      id: 6,
      img: ecommerce,
      title: "E-commerce SEO",
      description:
        "If you offer healthcare products or services online, we optimize your product or service pages to rank higher in search results. Our e-commerce SEO strategies increase traffic to your online store, helping you boost conversions and sales.",
    },
  ];
    const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="lpMedicalHow-container">
      <div className="lpMedicalHow-head">
        <h2>
          How do we help your clinic <span>attract more patients?</span>
        </h2>
        <p>
          We’ve successfully transformed patient acquisition for hundreds of
          clinics and hospitals. Here’s how we make it simple and effective.
        </p>
      </div>
      <div className="lpMedicalHow-content">
        {card.map((x) => (
          <div className="lpMedicalHow-card" key={x.id}>
            <div className="lpMedicalHow-cardIcon">
              <img src={x.img} alt={x.title} />
            </div>
            <div className="lpMedicalHow-para">
              <h4>{x.title}</h4>
              <p>{x.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="lpMedicalHow-btnContainer">
        <button class="frutiger-button">
          <div class="inner">
            <span class="text" onClick={handlePopUp}>BOOK NOW</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LpMedicalHow;
