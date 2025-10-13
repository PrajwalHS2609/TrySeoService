import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FranceSeoPageFaqAcc = () => {
  return (
    <div className="homeFaqAcc">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>How much does SEO Services cost? </h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              We provide high-quality SEO services at affordable prices, helping
              your business grow online without breaking the budget.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FranceSeoPageFaqAcc;
