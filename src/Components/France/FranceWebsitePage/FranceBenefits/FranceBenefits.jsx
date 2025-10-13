import React from 'react'
import online from "./../../../../Img/WebsitePage/online.png";
import market from "./../../../../Img/WebsitePage/market.jpg";
import customer from "./../../../../Img/WebsitePage/customer.jpg";
import assist from "./../../../../Img/WebsitePage/Assist.jpg";
import impression from "./../../../../Img/WebsitePage/impression.jpg";
import revenue from "./../../../../Img/WebsitePage/Revenue.jpg";
import enhance from "./../../../../Img/WebsitePage/Enhances.jpg";
import bandId from "./../../../../Img/WebsitePage/BandId.jpg";
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
import FranceBenefitsHead from './FranceBenefitsHead';
import WebsiteBenefitsCard1 from '../../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard1';
import WebsiteBenefitsCard2 from '../../../WebsitePage/WebsiteBenefits/WebsiteBenefitsCard2';
const FranceBenefits = () => {
  return (
 <div className="websiteBenefits" id="WebsiteBenefits">
      <FranceBenefitsHead />
      <WebsiteBenefitsCard1
        img={online}
        icon={faClock}
        head="Online Presence 24/7"
        para="Having a website means that customers can discover you anytime and from anywhere. Even outside of business hours, your site remains a magnet for attracting and retaining new clients. It offers users the convenience of accessing the information they need right from the comfort of their own homes."
        number="01"
      />
      <WebsiteBenefitsCard2
        img={market}
        alt="Market Expansion"
        icon={faHandshake}
        head="Market Expansion"
        para="Since your website is accessible to people globally, overcoming geographic barriers has become simpler than ever. Individuals from any nation can discover your business, which in turn increases the chances of them becoming potential customers."
        number="02"
      />
      <WebsiteBenefitsCard1
        img={customer}
        alt="Online Customer Service"
        icon={faHeadphonesSimple}
        head="Online Customer Service"
        para="Our web design service in France offers an easier way to handle customer service. You may lessen customer support costs and save time and money by offering answers to frequently asked questions in a FAQ section, as well as providing much more information. This also implies that customers will receive a response immediately, saving time and promoting great customer relations in the long run."
        number="03"
      />
      <WebsiteBenefitsCard2
        img={assist}
        alt="Assists Keep Up with Competitors"
        icon={faChartLine}
        head="Assists Keep Up with Competitors"
        para="Our web design service simplifies customer service management. By including a FAQ section with answers to common questions, you can reduce customer support expenses while saving both time and money. This approach ensures that customers get immediate responses, which not only saves time but also fosters strong customer relationships over time."
        number="04"
      />
      <WebsiteBenefitsCard1
        img={impression}
        alt="Provides a Better First Impression"
        icon={faFaceSmile}
        head="Provides a Better First Impression"
        para="A professionally designed website leaves a lasting positive impression on visitors, reflecting credibility and trustworthiness, while poorly designed sites risk appearing amateurish and diminishing your brand’s reputation."
      />
      <WebsiteBenefitsCard2
        img={revenue}
        alt="Boosts Revenue"
        icon={faIndianRupeeSign}
        head="Boosts Revenue"
        para="A sleek, professionally designed website attracts more visitors, boosts engagement, and drives higher revenue, turning your online presence into a powerful engine for business growth."
        number="06"
      />
      <WebsiteBenefitsCard1
        img={enhance}
        alt="Enhances Search Rankings"
        icon={faAddressBook}
        head="Enhances Search Rankings"
        para="An outdated or unprofessional website can hurt your search rankings. Investing in a professional website design ensures your site stays competitive and continues to rise in search engine results."
        number="07"
      />
      <WebsiteBenefitsCard2
        img={bandId}
        alt="Establishes Consistent Brand Identity"
        icon={faTurnUp}
        head="Establishes Consistent Brand Identity"
        para="Building a consistent brand identity is key to credibility and trust. A professional website brings your brand story to life, engaging your audience and reinforcing your business’s reliability."
        number="08"
      />
    </div>
  )
}

export default FranceBenefits
