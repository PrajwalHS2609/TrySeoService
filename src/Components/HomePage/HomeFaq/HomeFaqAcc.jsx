import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./HomeFaq.css";
const HomeFaqAcc = () => {
  return (
    <div className="homeFaqAcc">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>Why should I choose TrySeoService?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              {" "}
              Choosing the best SEO Agency means research, research and more
              research. Checking through reviews, team credentials, and getting
              proposals and audits.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5> Why is SEO Link Building Important?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              {" "}
              Choosing the best SEO Agency means research, research and more
              research. Checking through reviews, team credentials, and getting
              proposals and audits.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>Why is keyword research so important?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              {" "}
              Choosing the best SEO Agency means research, research and more
              research. Checking through reviews, team credentials, and getting
              proposals and audits.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5> Best SEO Practices for High Quality Content?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              {" "}
              Choosing the best SEO Agency means research, research and more
              research. Checking through reviews, team credentials, and getting
              proposals and audits.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default HomeFaqAcc;
