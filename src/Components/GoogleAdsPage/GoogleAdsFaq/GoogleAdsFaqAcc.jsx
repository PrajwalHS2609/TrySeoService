import React from "react";
import Accordion from "react-bootstrap/Accordion";

const GoogleAdsFaqAcc = () => {
  return (
    <div className="homeFaqAcc">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>What is Search Engine Marketing?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Search engine marketing (SEM) is a type of Internet marketing that
              includes improving the visibility of websites in SERPs mostly
              through paid advertising.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5> How much does Google Ads Services Cost?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>Our Google Ads services in Bangalore are cost-effective.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>What is the importance of Google Ads?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              You have complete control over how you spend your money with
              Google Ads. There is no such thing as a minimum. You can also
              specify how much you want to spend each month, per day, and per
              advertisement. You will only be charged if someone clicks on your
              ad.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5>Why Google Ads is important for your website?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Google Ads lets you target people who are looking for what your
              company has to offer. This means you may keep refining your
              searches so that only people interested in buying your products or
              services are directed to your websites via this platform.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h5>When can Google Ads start giving me results?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              The majority of advertisements are assessed within one business
              day. However, some reviews take longer if the advertisement
              necessitates a more in-depth analysis.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h5>How can I know if Google Ads is working for my brand?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Go to your Google Ads account and log in. To see a list of your
              advertising, go to the page menu and select Ads & extensions.
              Simply look in the “Status” column to see if an ad or extension is
              active.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <h5>Does Google Ads Pay well?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Google Ads are advantageous because they allow businesses of all
              sizes to reach a virtually limitless, focused audience at a low
              cost. They are very adaptable, allowing you to start, stop, pause,
              or even change your bids at any time.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default GoogleAdsFaqAcc;
