import React from "react";
import WebsiteBenefitsCard2 from "../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard2";
import WebsiteBenefitsCard1 from "../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard1";
import {
  faPeopleArrows,
  faHashtag,
  faIndianRupeeSign,
  faThumbsUp,
  faPhoneVolume,
  faPieChart,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import SocialMediaBenefitsHead from "./SocialMediaBenefitsHead";
const SocialMediaBenefits = () => {
  return (
    <div className="websiteBenefits" id="WebsiteBenefits">
      <SocialMediaBenefitsHead />
      <WebsiteBenefitsCard1
        img="https://tryseoservices.com/wp-content/uploads/2023/02/Open.png"
        alt="Increased Brand Awareness"
        icon={faPeopleArrows}
        head="Increased Brand Awareness"
        para="Social media platforms provide a vast audience for small businesses to showcase their products or services. By maintaining an active presence, you can increase brand visibility and recognition."
        number="01"
      />
      <WebsiteBenefitsCard2
        img="https://tryseoservices.com/wp-content/uploads/2023/02/lisheng-chang-M2524ncJQ40-unsplash-1024x683.jpg"
        alt="Targeted Marketing"
        icon={faHashtag}
        head="Targeted Marketing"
        para="Social media platforms allow businesses to target specific demographics, interests, and behaviors. This ensures that your marketing efforts reach the most relevant audience."
        number="02"
      />
      <WebsiteBenefitsCard1
        img="https://tryseoservices.com/wp-content/uploads/2023/02/charanjeet-dhiman-mHusyBu4bxM-unsplash-1024x683.jpg"
        alt="Cost-Effective"
        icon={faIndianRupeeSign}
        head="Cost-Effective"
        para="Social media advertising is often more cost-effective than traditional advertising channels. Small businesses with limited budgets can still achieve significant results through targeted ads."
        number="03"
      />
      <WebsiteBenefitsCard2
        img="https://tryseoservices.com/wp-content/uploads/2023/02/indira-tjokorda-Y-VYK0SDLxs-unsplash-1024x683.jpg"
        alt="Engagement and Interaction"
        icon={faThumbsUp}
        head="Engagement and Interaction"
        para="Social media fosters engagement and interaction with your audience. Responding to comments, messages, and feedback can help build relationships and trust with customers."
        number="04"
      />
      <WebsiteBenefitsCard1
        img="https://tryseoservices.com/wp-content/uploads/2023/02/fakhri-labib-ZhBGD4vykCU-unsplash-1024x683.jpg"
        alt="Lead Generation"
        icon={faPhoneVolume}
        head="Lead Generation"
        para="Many social platforms offer lead generation tools, helping businesses gather valuable contact information for potential customers."
        number="05"
      />
      <WebsiteBenefitsCard2
        img="https://tryseoservices.com/wp-content/uploads/2023/10/social-media-Analytics.png"
        alt="Engagement and Interaction"
        icon={faPieChart}
        head="Engagement and Interaction"
        para="Social media marketing provides detailed analytics, enabling businesses to measure the performance of their campaigns and adjust strategies accordingly."
        number="06"
      />
      <WebsiteBenefitsCard1
        img="https://tryseoservices.com/wp-content/uploads/2023/10/social-media-Global-Marketing.png"
        alt="Lead Generation"
        icon={faEarthAmerica}
        head="Lead Generation"
        para="Social media has a global reach, allowing small businesses to expand their customer base beyond their immediate locality."
        number="07"
      />
    </div>
  );
};

export default SocialMediaBenefits;
