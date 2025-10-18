import React from "react";
import {
  faMagnifyingGlass,
  faHandshake,
  faMicrophone,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContentServiceBenefits = () => {
  const card = [
    {
      id: 1,
      icon: faMagnifyingGlass,
      title: "Increases Search Engine Optimization (SEO)",
      description:
        "SEO is the method of boosting the traffic your website acquires from search engines. The best way to improve your SEO is to hire freelance content writing in Bangalore to create SEO-friendly content.",
    },
    {
      id: 2,
      icon: faHandshake,
      title: "Boost in Sales",
      description:
        "The consumer's decision-making process will be influenced by good content. Whether you're running an eCommerce or service-based business, well-written content can help you sell your product by presenting it in the best possible way.",
    },
    {
      id: 3,
      icon: faMicrophone,
      title: "A Voice for your Brand",
      description:
        "Your website will reflect your business, allowing customers to understand more about you and what you represent as a business. Maintaining a consistent voice across your website and other digital marketing content will help you establish a strong brand image in your customers' minds.",
    },
    {
      id: 4,
      icon: faPhone,
      title: "Boost Conversation Rates",
      description:
        "A well-written, engaging piece of content will help you ensure that the person completes the survey. The conversation rate is the percentage of visitors to your website who complete a specific goal.",
    },
    {
      id: 5,
      icon: faLocationArrow,
      title: "Reach New Audiences",
      description:
        "Engaging, well-written content will always succeed, especially if you use a few SEO-friendly content development tactics.",
    },
  ];
  return (
    <div className="seoServiceBenefits-container">
      <div className="seoServiceBenefit-head">
        <h2>Benefits of Content Writing Services</h2>
      </div>
      {card.map((x) => (
        <div className="seoServiceBenefits-card" key={x.id}>
          <FontAwesomeIcon
            icon={x.icon}
            className="seoServiceBenefits-cardIcon"
          ></FontAwesomeIcon>{" "}
          <div className="seoServiceBenefits-cardContent">
            <h3>{x.title}</h3>
            <p>{x.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentServiceBenefits;
