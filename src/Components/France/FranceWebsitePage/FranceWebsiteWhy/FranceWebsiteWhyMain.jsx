import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FranceWebsiteWhyMain = () => {
  return (
    <div className="WebsiteWhyMainAcc">
      <Accordion className="websiteWhyAcc">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>Enhanced User Experience</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              A responsive web design delivers an exceptional user experience,
              making content easy to view without zooming or scrolling, leaving
              visitors with a positive impression and increasing the likelihood
              they’ll engage with your business.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>Impact on Google Ranking</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Google favors mobile-friendly sites, so responsive website design
              in France boosts SEO. Website responsiveness is a key factor in
              search rankings, helping your site achieve higher visibility and
              better performance in search engine results.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5>Optimized Traffic</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Implementing responsive web design in France naturally
              increases your website traffic and keeps visitors engaged longer,
              enhancing user experience and boosting the overall performance and
              effectiveness of your online presence.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5> Cost-effectiveness</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Maintaining separate mobile and desktop sites can be expensive.
              With responsive design, you save costs while ensuring your website
              appeals seamlessly to all visitors and devices through our
              affordable, professional website design services.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5> Easy Maintenance</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Many businesses, especially small ones, lack time to update their
              website. Website development empowers you to make quick, easy
              adjustments yourself, eliminating the need to hire a designer for
              every change.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FranceWebsiteWhyMain;
