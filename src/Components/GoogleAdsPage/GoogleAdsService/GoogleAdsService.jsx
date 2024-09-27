import React from "react";
import GoogleAdsServiceHead from "./GoogleAdsServiceHead";
import WebsiteHowItCard from "../../WebsitePage/WebsiteHowIt/WebsiteHowItCard";
import {
  faMagnifyingGlass,
  faRectangleAd,
  faUserSecret,
  faBrain,
  faIndianRupee,
  faWrench,
  faShoePrints,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
const GoogleAdsService = () => {
  return (
    <div className="googleAdsService">
      <GoogleAdsServiceHead />
      <div className="websiteHowItWrapper">
        <WebsiteHowItCard
          icon={faMagnifyingGlass}
          head="Keyword Research and Selection"
          classNameIco="howItWorksIco"
          no="01"
          num="howItWorksNo1"
        />
        <WebsiteHowItCard
          icon={faRectangleAd}
          head="Competitive Research"
          idIco="howItWorksIcoColor"
          no="02"
          num="howItWorksNo2"
        />
        <WebsiteHowItCard
          icon={faUserSecret}
          head="Text and Image Ads Creation"
          classNameIco="howItWorksIco"
          no="03"
          num="howItWorksNo1"
        />
        <WebsiteHowItCard
          icon={faBrain}
          head="Ideas to Optimize Landing Pages"
          idIco="howItWorksIcoColor"
          no="04"
          num="howItWorksNo2"
        />
        <WebsiteHowItCard
          icon={faIndianRupee}
          head="PPC Cost Management"
          classNameIco="howItWorksIco"
          no="05"
          num="howItWorksNo1"
        />
        <WebsiteHowItCard
          icon={faWrench}
          head="Ad Campaign Modification and Improvements"
          idIco="howItWorksIcoColor"
          no="06"
          num="howItWorksNo2"
        />
        <WebsiteHowItCard
          icon={faShoePrints}
          head="Conversion Tracking"
          classNameIco="howItWorksIco"
          no="07"
          num="howItWorksNo1"
        />
        <WebsiteHowItCard
          icon={faRectangleList}
          head="Monthly Performance Report"
          idIco="howItWorksIcoColor"
          no="08"
          num="howItWorksNo2"
        />
      </div>
    </div>
  );
};

export default GoogleAdsService;
