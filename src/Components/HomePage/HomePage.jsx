import React, { Suspense } from "react";
import "./HomePage.css";
import HomeService from "./HomeService/HomeService";
import HomeAboutUs from "./HomeAboutUs/HomeAboutUs";
import HomeMarquee from "./HomeMarquee/HomeMarquee";
import HomeTestimonial from "./HomeTestimonial/HomeTestimonial";
import HomeWorking from "./HomeWorking/HomeWorking";
import HomeWhatWe from "./HomeWhatWe/HomeWhatWe";
import HomeFaq from "./HomeFaq/HomeFaq";
import HomeFocused from "./HomeFocused/HomeFocused";
import { Helmet } from "react-helmet-async";
import { useLocation, useParams } from "react-router-dom";
import GermanyWhatWeDo from "../Germany/GeamanyHomePage/GermanyWhatWeDo";
const HomeHeader = React.lazy(() => import("./HomeHeader/HomeHeader"));

const HomePage = () => {
    const { countryCode } = useParams();  // get 'de', 'fr', 'in', etc.

  const location = useLocation();
  const canonicalUrl = `https://tryseoservices.com${location.pathname}`;

  const renderHomeWhatWe = () => {
    switch (countryCode?.toLowerCase()) {
      case "de":
        return <GermanyWhatWeDo />;
      // case "fr":
      //   return <HomeWhatWeFR />;
      default:
        return <HomeWhatWe />; // default version (India)
    }
  };

  return (
    <div className="homePageContainer">
      <Helmet>
        <title>
          Digital Marketing Services in Bangalore, India for Small Business
        </title>
        <meta
          name="description"
          content="Digital Marketing Services in Bangalore for Small Business. For High Quality Traffic, Qualified Leads, Online Sales, Maximum Reach, & Search Ranking."
        />
        <link rel="canonical" href={canonicalUrl} />{" "}
      </Helmet>
      <Suspense fallback={<p>Loading....</p>}>
        <HomeHeader />
      </Suspense>
      <HomeService />
      <HomeAboutUs />
      <HomeMarquee />
      <HomeWorking />
      {renderHomeWhatWe()}

      {/* <HomeWhatWe /> */}
      <HomeFocused />
      <HomeTestimonial />
      <HomeFaq />
    </div>
  );
};

export default HomePage;
