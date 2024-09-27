import React from "react";
import ContentWhyHead from "./ContentWhyHead";
import {
  faArrowPointer,
  faLink,
  faBoltLightning,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import WebsiteHowItCard from "../../WebsitePage/WebsiteHowIt/WebsiteHowItCard";
const ContentPageWhy = () => {
  return (
    <div>
      <ContentWhyHead />
      <div className="websiteHowItWrapper">
        <WebsiteHowItCard
          icon={faArrowPointer}
          head="Generates High CTR"
          classNameIco="howItWorksIco"
          no="01"
          num="howItWorksNo1"
          para="Google considers your click-through rate (CTR) as an essential factor to rank your website – the more people who click on your links, the higher your chances of achieving better search engine ranks."
        />
        <WebsiteHowItCard
          icon={faLink}
          head="Generate Backlinks"
          idIco="howItWorksIcoColor"
          no="02"
          num="howItWorksNo2"
          para="The high-quality backlinks imply credibility and trust for Google. The more quality backlinks you have, the greater you are likely to rank on Google."
        />
        <WebsiteHowItCard
          icon={faBoltLightning}
          head="Enables you to Incorporate Keywords"
          classNameIco="howItWorksIco"
          no="03"
          num="howItWorksNo1"
          para="Quality content is the only way to ensure that you can effectively use your keywords. This will enable you to compete with other brands in your industry."
        />
        <WebsiteHowItCard
          icon={faSmile}
          head="Offers a Great User Experience"
          idIco="howItWorksIcoColor"
          no="04"
          num="howItWorksNo2"
          para="SEO comprises several strategies like generating backlinks, writing quality content, and using good keywords, and users can navigate easily."
        />
      </div>
    </div>
  );
};

export default ContentPageWhy;
