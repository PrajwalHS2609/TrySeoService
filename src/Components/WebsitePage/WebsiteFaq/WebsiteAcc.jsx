import React from "react";
import Accordion from "react-bootstrap/Accordion";

const WebsiteAcc = () => {
  return (
    <div className="homeFaqAcc">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>What is Search Engine Optimization?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Search engine optimization (SEO) is the art and science of
              acquiring pages to rank higher in search engines such as Google.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5> How much does SEO Services Cost?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              We are offering SEO services in Bangalore at affordable prices.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>When can SEO start giving me results?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              While there is no definitive answer regarding how long it takes to
              get organic results from SEO efforts, but it usually takes four to
              six months.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5>Is SEO good for my business?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              SEO is essential as it keeps the search results accurate. The
              higher you rank in results pages, the more clicks and traffic your
              site will get. It also enhances the user experience, making it
              more likely for customers to become repeat buyers. It is also
              cost-effective.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h5>What is the importance of a Local SEO?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Local SEO makes your business stand out even if you do not have a
              website and helps online leads generate more traffic to your
              business. Because these leads come from people who are explicitly
              looking for the products or services that your company provides,
              you may expect a high conversion rate.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h5>Why SEO is important for your website?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              SEO techniques improve a website’s usability and user experience
              and make you stay ahead of your competitors.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <h5>How can I know if SEO is working for my brand?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Boost in organic traffic is a great sign that your SEO is
              performing. An increase in the number of pages that you are
              ranking for means that your SEO is working and in the number of
              searches online for your company’s name shows SEO is working.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default WebsiteAcc;
