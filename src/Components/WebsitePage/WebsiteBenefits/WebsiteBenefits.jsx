import React from "react";
import "./WebsiteBenefits.css";
import WebsiteBenefitsHeader from "./WebsiteBenefitsHeader";
import WebsiteBenefitsCard1 from "./WebsiteBenefitsCard1";
import WebsiteBenefitsCard2 from "./WebsiteBenefitsCard2";
import online from "./../../../Img/WebsitePage/online.png";
import market from "./../../../Img/WebsitePage/market.jpg";
import customer from "./../../../Img/WebsitePage/customer.jpg";
import assist from "./../../../Img/WebsitePage/Assist.jpg";
import impression from "./../../../Img/WebsitePage/impression.jpg";
import revenue from "./../../../Img/WebsitePage/Revenue.jpg";
import enhance from "./../../../Img/WebsitePage/Enhances.jpg";
import bandId from "./../../../Img/WebsitePage/BandId.jpg";

import {
  faClock,
  faHandshake,
  faChartLine,
  faHeadphonesSimple,
  faFaceSmile,
  faIndianRupeeSign,
  faAddressBook,
  faTurnUp,
} from "@fortawesome/free-solid-svg-icons";

const WebsiteBenefits = () => {
  return (
    <div className="websiteBenefits" id="WebsiteBenefits">
      <WebsiteBenefitsHeader />
      <WebsiteBenefitsCard1
        img={online}
        icon={faClock}
        head="Online Presence 24/7"
        para="If you have a website, customers can find you at any time and from any location. Even after business hours, your website continues to attract and keep new clients. It provides convenience to the user because they can obtain the information they require from the comfort of their own home."
        number="01"
      />
      <WebsiteBenefitsCard2
        img={market}
        alt="Market Expansion"
        icon={faHandshake}
        head="Market Expansion"
        para="Because your website is available to anyone in the world, breaking down geographic boundaries has never been easier. Anyone, from any country, will be able to find your business and, as a result, become a potential customer."
        number="02"
      />
      <WebsiteBenefitsCard1
        img={customer}
        alt="Online Customer Service"
        icon={faHeadphonesSimple}
        head="Online Customer Service"
        para="Our web design service in Bangalore offers an easier way to handle customer service. You may lessen customer support costs and save time and money by offering answers to frequently asked questions in a FAQ section, as well as providing much more information. This also implies that customers will receive a response immediately, saving time and promoting great customer relations in the long run."
        number="03"
      />
      <WebsiteBenefitsCard2
        img={assist}
        alt="Assists Keep Up with Competitors"
        icon={faChartLine}
        head="Assists Keep Up with Competitors"
        para="To stay ahead of the competition, our website development in Bangalore designs you'll your website that's up to date on design trends."
        number="04"
      />
      <WebsiteBenefitsCard1
        img={impression}
        alt="Provides a Better First Impression"
        icon={faFaceSmile}
        head="Provides a Better First Impression"
        para="Having a properly designed website means that visitors will have a good impression of your site. Amateur websites may give the impression of being unprofessional and untrustworthy."
        number="05"
      />
      <WebsiteBenefitsCard2
        img={revenue}
        alt="Boosts Revenue"
        icon={faIndianRupeeSign}
        head="Boosts Revenue"
        para="A professional, well-designed website will bring visitors and, as a result, increase revenue."
        number="06"
      />
      <WebsiteBenefitsCard1
        img={enhance}
        alt="Enhances Search Rankings"
        icon={faAddressBook}
        head="Enhances Search Rankings"
        para="An out-of-date and unprofessional website will only affect your search ranking performance, so it's important to invest in a professional website design so that your website can continue to climb the search engine ranks."
        number="07"
      />
      <WebsiteBenefitsCard2
        img={bandId}
        alt="Establishes Consistent Brand Identity"
        icon={faTurnUp}
        head="Establishes Consistent Brand Identity"
        para="Creating a consistent brand identity is essential for establishing business credibility and reliability, and having a professional website may help you express your brand's story more effectively."
        number="08"
      />
    </div>
  );
};

export default WebsiteBenefits;
