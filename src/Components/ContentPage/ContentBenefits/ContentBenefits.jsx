import React from "react";
import WebsiteBenefitsCard1 from "../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard1";
import WebsiteBenefitsCard2 from "../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard2";
import {
  faMagnifyingGlass,
  faHandshake,
  faMicrophone,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import ContentBenefitsHeader from "./ContentBenefitsHeader";
const ContentBenefits = () => {
  return (
    <div className="websiteBenefits" id="WebsiteBenefits">
      <ContentBenefitsHeader />
      <WebsiteBenefitsCard1
        img="https://tryseoservices.com/wp-content/uploads/2023/02/Open.png"
        alt="Increases Search Engine Optimization (SEO)"
        icon={faMagnifyingGlass}
        head="Increases Search Engine Optimization (SEO)"
        para="SEO is the method of boosting the traffic your website acquires from search engines. The best way to improve your SEO is to hire freelance content writing in Bangalore to create SEO-friendly content."
        number="01"
      />
      <WebsiteBenefitsCard2
        img="https://tryseoservices.com/wp-content/uploads/2023/02/lisheng-chang-M2524ncJQ40-unsplash-1024x683.jpg"
        alt="Boost in Sales"
        icon={faHandshake}
        head="Boost in Sales"
        para="The consumer's decision-making process will be influenced by good content. Whether you're running an eCommerce or service-based business, well-written content can help you sell your product by presenting it in the best possible way."
        number="02"
      />
      <WebsiteBenefitsCard1
        img="https://tryseoservices.com/wp-content/uploads/2023/02/charanjeet-dhiman-mHusyBu4bxM-unsplash-1024x683.jpg"
        alt="A Voice for your Brand"
        icon={faMicrophone}
        head="A Voice for your Brand"
        para="Your website will reflect your business, allowing customers to understand more about you and what you represent as a business. Maintaining a consistent voice across your website and other digital marketing content will help you establish a strong brand image in your customers' minds."
        number="03"
      />
      <WebsiteBenefitsCard2
        img="https://tryseoservices.com/wp-content/uploads/2023/02/indira-tjokorda-Y-VYK0SDLxs-unsplash-1024x683.jpg"
        alt="Boost Conversation Rates"
        icon={faPhone}
        head="Boost Conversation Rates"
        para="A well-written, engaging piece of content will help you ensure that the person completes the survey. The conversation rate is the percentage of visitors to your website who complete a specific goal."
        number="04"
      />
      <WebsiteBenefitsCard1
        img="https://tryseoservices.com/wp-content/uploads/2023/02/fakhri-labib-ZhBGD4vykCU-unsplash-1024x683.jpg"
        alt="Reach New Audiences"
        icon={faLocationArrow}
        head="Reach New Audiences"
        para="Engaging, well-written content will always succeed, especially if you use a few SEO-friendly content development tactics."
        number="05"
      />
    </div>
  );
};

export default ContentBenefits;
