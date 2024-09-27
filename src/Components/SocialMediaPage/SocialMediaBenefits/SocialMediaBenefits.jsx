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
import brandAware from "./../../../Img/SocialMediaPage/awareness.png";
import marketing from "./../../../Img/SocialMediaPage/marketing.png";
import costEffect from "./../../../Img/SocialMediaPage/cost.png";
import engagement from "./../../../Img/SocialMediaPage/engagement.png";
import generation from "./../../../Img/SocialMediaPage/generation.png";
import measurable from "./../../../Img/SocialMediaPage/measurable.png";
import global from "./../../../Img/SocialMediaPage/global.png";


const SocialMediaBenefits = () => {
  return (
    <div className="websiteBenefits" id="WebsiteBenefits">
      <SocialMediaBenefitsHead />
      <WebsiteBenefitsCard1
        img={brandAware}
        alt="Increased Brand Awareness"
        icon={faPeopleArrows}
        head="Increased Brand Awareness"
        para="Social media platforms provide a vast audience for small businesses to showcase their products or services. By maintaining an active presence, you can increase brand visibility and recognition."
        number="01"
      />
      <WebsiteBenefitsCard2
        img={marketing}
        alt="Targeted Marketing"
        icon={faHashtag}
        head="Targeted Marketing"
        para="Social media platforms allow businesses to target specific demographics, interests, and behaviors. This ensures that your marketing efforts reach the most relevant audience."
        number="02"
      />
      <WebsiteBenefitsCard1
        img={costEffect}
        alt="Cost-Effective"
        icon={faIndianRupeeSign}
        head="Cost-Effective"
        para="Social media advertising is often more cost-effective than traditional advertising channels. Small businesses with limited budgets can still achieve significant results through targeted ads."
        number="03"
      />
      <WebsiteBenefitsCard2
        img={engagement}
        alt="Engagement and Interaction"
        icon={faThumbsUp}
        head="Engagement and Interaction"
        para="Social media fosters engagement and interaction with your audience. Responding to comments, messages, and feedback can help build relationships and trust with customers."
        number="04"
      />
      <WebsiteBenefitsCard1
        img={generation}
        alt="Lead Generation"
        icon={faPhoneVolume}
        head="Lead Generation"
        para="Many social platforms offer lead generation tools, helping businesses gather valuable contact information for potential customers."
        number="05"
      />
      <WebsiteBenefitsCard2
        img={measurable}
        alt="Measurable Results"
        icon={faPieChart}
        head="Measurable Results"
        para="Social media marketing provides detailed analytics, enabling businesses to measure the performance of their campaigns and adjust strategies accordingly."
        number="06"
      />
      <WebsiteBenefitsCard1
        img={global}
        alt="Global Reach"
        icon={faEarthAmerica}
        head="Global Reach"
        para="Social media has a global reach, allowing small businesses to expand their customer base beyond their immediate locality."
        number="07"
      />
    </div>
  );
};

export default SocialMediaBenefits;
