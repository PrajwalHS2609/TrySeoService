import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FranceWebsiteFaqAcc = () => {
  return (
    <div className="homeFaqAcc">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>
              1. What services does TrySEOServices.Com offer in website design?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              We provide complete website design solutions, including responsive
              web design, user-friendly interfaces, e-commerce sites, landing
              pages, and custom designs tailored to your brand and business
              goals.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5> 2. Why is a responsive website important for my business?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              A responsive website ensures your site looks and functions
              flawlessly on all devices—desktops, tablets, and
              smartphones—enhancing user experience, increasing engagement, and
              improving search engine rankings.{" "}
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>3. How long does it take to design a website?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Depending on the project’s complexity, most websites are designed
              and launched within 3–8 weeks. We prioritize quality, usability,
              and meeting your business objectives on time.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5>4. Can I update my website after it’s built?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Absolutely! We provide websites with easy-to-use content
              management systems (CMS), allowing you to update content, images,
              or products quickly without needing technical expertise.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h5>5. Do you offer SEO-friendly website designs?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes. Every website we design is optimized for search engines from
              the ground up, helping you rank higher, attract more traffic, and
              convert visitors into customers.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h5>6. How much does a website design cost?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Costs vary based on complexity, features, and customization. We
              provide tailored quotes to match your business requirements while
              delivering high-quality, cost-effective solutions.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <h5>
              7. Do you provide ongoing support after the website is live?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes. We offer maintenance, updates, and technical support to
              ensure your website continues to perform optimally and grow with
              your business.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FranceWebsiteFaqAcc;
