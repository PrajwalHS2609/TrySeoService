import React from "react";
import "./LpPetsProcess.css";
import Accordion from "react-bootstrap/Accordion";

const LpPetsProcess = () => {
  return (
    <div className="lpPetsProcess-container">
      <div className="lpPetsProcess-content">
        <h2>Our high-quality working processes</h2>
        <p>
          At TrySEOServices.Com, our digital marketing solutions for pet clinics
          are designed to ensure smooth communication and collaboration at every
          stage. We craft strategies tailored to your clinic’s unique goals,
          location, and target audience, helping you increase visibility,
          attract more pet owners, and boost footfalls.
        </p>
        <p>
          Each campaign is customized to meet your specific requirements, and
          while approaches may vary based on complexity, our expert team ensures
          every step—from planning to execution—aligns with your objectives. We
          provide regular updates and transparent reporting, so you always know
          how your marketing efforts are performing and achieving measurable
          results.
        </p>
      </div>
      <div className="lpPetsProcess-content">
        <Accordion className="lpPetsProcess-acc">
          <Accordion.Item eventKey="0" className="lpPetsProcess-item">
            <Accordion.Header>
              <h3>01/ Planning & Design</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Strategic layout and creative design to engage users
                effectively.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="lpPetsProcess-item">
            <Accordion.Header>
              <h3>02/ Development & Optimization</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Building a functional website with optimized performance, fast
                loading, and seamless user experience for visitors.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="lpPetsProcess-item">
            <Accordion.Header>
              <h3>03/ Launch & Promotion</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Deploying the website live while promoting through SEO, social
                media, and marketing strategies for maximum reach.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default LpPetsProcess;
