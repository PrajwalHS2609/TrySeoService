import React from "react";
import SmsServiceHead from "./SmsServiceHead";
import WebsiteHowItCard from "../../WebsitePage/WebsiteHowIt/WebsiteHowItCard";
import {
  faPenToSquare,
  faUsersLine,
  faRectangleAd,
  faLineChart,
} from "@fortawesome/free-solid-svg-icons";
const SmsService = () => {
  return (
    <div>
      <SmsServiceHead />
      <div className="websiteHowItWrapper">
        <WebsiteHowItCard
          icon={faPenToSquare}
          head="Campaign Creation"
          classNameIco="howItWorksIco"
          no="01"
          num="howItWorksNo1"
          para="We design and execute SMS and WhatsApp campaigns that are tailored to your goals, visually appealing, and designed to drive results."
        />
        <WebsiteHowItCard
          icon={faUsersLine}
          head="Segmentation"
          idIco="howItWorksIcoColor"
          no="02"
          num="howItWorksNo2"
          para="We segment your contact lists to ensure that the right messages are delivered to the right people, increasing open and response rates."
        />
        <WebsiteHowItCard
          icon={faRectangleAd}
          head="A/B Testing"
          classNameIco="howItWorksIco"
          no="03"
          num="howItWorksNo1"
          para="We conduct A/B tests to optimize content, timing, and strategies, ensuring that your campaigns achieve the best possible results."
        />
        <WebsiteHowItCard
          icon={faLineChart}
          head="Analytics and Reporting"
          idIco="howItWorksIcoColor"
          no="04"
          num="howItWorksNo2"
          para="We provide comprehensive insights into your campaign performance, allowing you to understand what's working and where improvements can be made."
        />
      </div>
    </div>
  );
};

export default SmsService;
