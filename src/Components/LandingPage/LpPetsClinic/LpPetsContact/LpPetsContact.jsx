import React from "react";
import "./LpPetsContact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FaArrowRight } from "react-icons/fa";
import arrow from "./../../../../Img/curveArrow.png";

const LpPetsContact = () => {
  return (
    <div className="lpPetsContact-container" id="contact-us">
      <div className="lpPetsContact-wrapper">
        <div className="lpPetsContact-content">
          <h2>Let's start a project together</h2>
          <p>
            We collaborate with pet clinics to understand their goals, target
            audience, and unique needs, crafting creative digital strategies and
            practical solutions that bring measurable results.
          </p>
        </div>
        <div className="lpPetsContact-content">
          <div className="lpPetsContact-itemContainer">
            <div className="lpPetsContact-item">
              <h4>Give us a call:</h4>
              <a href="tel:6360226773">+91 6360226773</a>
            </div>
            <div className="lpPetsContact-item">
              <h4>Send us an email:</h4>
              <a href="mailto:info@tryseoservices.com">
                info@tryseoservices.com
              </a>
            </div>
          </div>
          <div className="lpPetsContact-itemArrow">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="lpPetsContact-content">
          <div className="lpPetsContact-social">
            <a href="https://www.facebook.com/tryseoservices">
              {" "}
              <FontAwesomeIcon
                icon={faFacebook}
                className="lpPetsContact-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="lpPetsContact-social">
            <a href="https://x.com/tryseoservices">
              {" "}
              <FontAwesomeIcon
                icon={faXTwitter}
                className="lpPetsContact-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="lpPetsContact-social">
            <a href="https://www.linkedin.com/company/tryseoservices/">
              {" "}
              <FontAwesomeIcon
                icon={faLinkedin}
                className="lpPetsContact-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="lpPetsContact-social">
            <a href="https://www.instagram.com/tryseoservices/">
              {" "}
              <FontAwesomeIcon
                icon={faInstagram}
                className="lpPetsContact-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="lpPetsContact-social">
            <a href="https://www.youtube.com/@tryseoservices">
              {" "}
              <FontAwesomeIcon
                icon={faYoutube}
                className="lpPetsContact-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
      <div className="lpPetsContact-wrapper">
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email address" />
            <input type="tel" placeholder="+088-234-6849" />
            <textarea placeholder="Write your message here..."></textarea>
            <button type="submit">
              Send message{" "}
              <span>
                <FaArrowRight className="lpPetsContact-formIco" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LpPetsContact;
