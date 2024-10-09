import React from "react";
import "./HomeService.css";
import HomeServiceHead from "./HomeServiceHead";
import HomeServiceCard from "./HomeServiceCard";
import seoMag from "./../../../Img/HomeService/SEOMag.png";
import adsServ from "./../../../Img/HomeService/adsService.png";
import webDesign from "./../../../Img/HomeService/WebsiteDesign.png";
import content from "./../../../Img/HomeService/Content.png";

const HomeService = () => {
  return (
    <div className="homeService">
      <HomeServiceHead />
      <div className="homeServiceContent">
        <HomeServiceCard
          img={seoMag}
          alt="seoMag"
          link="/social-media-marketing-services-in-bangalore"
          head1="Google & Bing"
          head2="SEO"
          para="In today's digital environment, SEO ensures increased conversions and aids in the growth of your company. Your company can rank on the first page of the SERP if you use the appropriate SEO tactics."
        />
        <HomeServiceCard
          img={adsServ}
          alt="adsServ"
          link="/google-ads-service-in-bangalore"
          head1="Search, Display & Video"
          head2="Google Ads"
          para="We ensure that your budget is managed and that your paid marketing Google Ad campaigns are boosted. A good keyword strategy combined with in-depth keyword research will help you get more customers."
        />
        <HomeServiceCard
          img={webDesign}
          alt="webDesign"
          link="/website-designing-services-in-bangalore"
          head1="Product & Services"
          head2="Website Design"
          para="A responsive and mobile-friendly web design ensures that your website and applications are easy to use and adjust to different screen sizes and displays."
        />
        <HomeServiceCard
          img={content}
          alt="content"
          link="/content-writing-service-in-bangalore"
          head1="SEO & Promotion"
          head2="Content Writing"
          para="Content is rightly regarded as the king of the marketing industry, as it is the only factor that contributes to the development of a strong online persona on search engines."
        />
      </div>
    </div>
  );
};

export default HomeService;
