import React from "react";
import "./HomeService.css";
import HomeServiceHead from "./HomeServiceHead";
import HomeServiceCard from "./HomeServiceCard";
import seoMag from "./../../../Img/HomeService/SEOMag.png";
import adsServ from "./../../../Img/HomeService/adsService.png";
import webDesign from "./../../../Img/HomeService/WebsiteDesign.png";
import content from "./../../../Img/HomeService/Content.png";

const HomeService = () => {
  const countryCode =
    localStorage.getItem("preferredCountry")?.toLowerCase() || "";
  return (
    <div className="homeService">
      <HomeServiceHead />
      <div className="homeServiceContent">
        <HomeServiceCard
          img={seoMag}
          alt="seoMag"
          link={`/${countryCode}/seo-services-in-bangalore`}
          head1="Google & Bing"
          head2="SEO"
          para="Transform your online presence into a growth engine! Smart SEO strategies boost your visibility, increase conversions, and take your brand straight to the top of search results — where real success begins."
        />
        <HomeServiceCard
          img={adsServ}
          alt="adsServ"
          link={`/${countryCode}/google-ads-service-in-bangalore`}
          head1="Search, Display & Video"
          head2="Google Ads"
          para="Your ad budget deserves results, not guesses! We fine-tune every Google Ads campaign with laser-focused keyword strategies that attract real buyers and deliver measurable growth for your business."
        />
        <HomeServiceCard
          img={webDesign}
          alt="webDesign"
          link={`/${countryCode}/website-designing-services-in-bangalore`}
          head1="Product & Services"
          head2="Website Design"
          para="From smartphones to desktops, we make your brand look stunning everywhere! Our responsive web design ensures effortless browsing, smooth navigation, and pixel-perfect performance across every screen size."
        />
        <HomeServiceCard
          img={content}
          alt="content"
          link={`/${countryCode}/content-writing-service-in-bangalore`}
          head1="SEO & Promotion"
          head2="Content Writing"
          para="Content isn’t just king — it’s the heartbeat of your digital empire. Powerful words and strategic storytelling build the strong online presence your brand deserves, ruling the search results with authority."
        />
      </div>
    </div>
  );
};

export default HomeService;
