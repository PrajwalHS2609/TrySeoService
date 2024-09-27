import React from "react";
import Accordion from "react-bootstrap/Accordion";

const ContentFaqAcc = () => {
  return (
    <div className="homeFaqAcc">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>What is SEO Content Writing?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              The use of keywords and key phrases in web content is known as
              SEO. We use SEO to boost your site’s organic visibility and SERP
              rankings.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5> How much does Content Writing Cost?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              We offer an effective content writing service in Bangalore at
              affordable prices.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>What is the importance of SEO Content Writing?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Designing useful, compelling, and valuable content that targets
              particular keywords is all about SEO content writing. This boosts
              the authority and relevance of your content and enhances its
              ranking in Google for the chosen keywords.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5>Why Content is important for your website?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Content can assist to educate your audience & ensure that they are
              making smart purchasing decisions. It can assist you to become
              more visible online on search engines and social media. It also
              boosts traffic to your website and creates authority with search
              engines.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h5>How long will take to show in Google results?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Although it varies, it indicates that Google crawls a site and
              assigns authority to the domain in as little as 4 days and as long
              as 6 months. When you publish a new blog post, website page, or
              website in general, there are several elements that influence how
              soon Google indexes it.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h5>How can I know if SEO Content is working for my brand?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              There are a few key SEO performance metrics that you must track to
              know if your SEO content is working such as
              <ul>
                <li>Impressions</li>
                <li>Traffic from Organic Searches</li>
                <li>Number of Pages Ranking</li>
                <li>Number of Backlinks</li>
                <li>Domain & Page Authority</li>
              </ul>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <h5>Does SEO Content Pay well?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              SEO content enhances your visibility on search engines which
              brings traffic to your website and promotes people to buy your
              products & services.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ContentFaqAcc;
