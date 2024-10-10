import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./WebsiteWhy.css"
const WebsiteWhyMain = () => {
  return (
    <div className="WebsiteWhyMainAcc">
      <Accordion className="websiteWhyAcc">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>Enhanced User Experience</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              A responsive web design in Bangalore provides a much better user
              experience, assist to convince people to provide your company a
              chance. Content may be viewed faster because zooming and scrolling
              are no longer required, and visitors will have a much better
              overall impression.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>Impact on Google Ranking</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Because Google encourages mobile-friendly websites, responsive
              website designing in Bangalore can assist with SEO. The
              responsiveness of all websites is taken into account by Google as
              one of the factors that determine their position in the search
              engine results.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5>Optimized Traffic</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              You will automatically notice a boost in the number of your
              website visitors and also the duration they spend on your website
              by implementing responsive web design in Bangalore.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5> Cost-effectiveness</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              It can be costly to maintain separate sites for mobile and
              non-mobile visitors. If you adopt responsive design, you can save
              money by not having to pay for a mobile site. To appeal to all
              visitors and devices, we provide cost-effective website designing
              in Bangalore.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5> Easy Maintenance</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Most businesses, particularly smaller ones, do not have much time
              to maintain or refresh their website’s appearance. Rather than
              hiring a designer to manage every part of your website, website
              development in Bangalore allows you to make adjustments quickly
              and easily yourself. in Bangalore.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default WebsiteWhyMain;
