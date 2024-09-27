import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import "./HomePage.css"
import HomeService from "./HomeService/HomeService";
import HomeAboutUs from "./HomeAboutUs/HomeAboutUs";
import HomeMarquee from "./HomeMarquee/HomeMarquee";
import HomeTestimonial from "./HomeTestimonial/HomeTestimonial";
import HomeWorking from "./HomeWorking/HomeWorking";
import HomeWhatWe from "./HomeWhatWe/HomeWhatWe";
import HomePricing from "./HomePricing/HomePricing";
import HomeFaq from "./HomeFaq/HomeFaq";
const HomePage = () => {
  return (
    <div className="homePageContainer">
     <HomeHeader/>
     <HomeService/>
     <HomeAboutUs/>
     <HomeMarquee/>
     <HomeWorking/>
     <HomeWhatWe/>
     <HomePricing/>
     <HomeTestimonial/>
     <HomeFaq/>
    </div>
  );
};

export default HomePage;
