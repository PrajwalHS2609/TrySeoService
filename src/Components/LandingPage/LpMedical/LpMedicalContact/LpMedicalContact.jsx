import React from "react";
import "./LpMedicalContact.css";
import Swal from "sweetalert2";
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

const LpMedicalContact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);

    formData.append("access_key", "7a49c951-139a-412a-b3a5-6d69beb45d96");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
      });
      form.reset(); // Clear the form after successful submission
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again later.",
        icon: "error",
      });
    }
  };
  return (
    <div className="LpMedicalContact-container" id="contact-us">
      <div className="LpMedicalContact-wrapper">
        <div className="LpMedicalContact-content">
          <h2>Let’s Turn Your Ideas into Reality</h2>
          <p>
            Share your vision with us, and we’ll help bring your ideas to life
            with expert solutions.
          </p>
        </div>
        <div className="LpMedicalContact-content">
          <div className="LpMedicalContact-itemContainer">
            <div className="LpMedicalContact-item">
              <h4>Give us a call:</h4>
              <a href="tel:6360226773">+91 6360226773</a>
            </div>
            <div className="LpMedicalContact-item">
              <h4>Send us an email:</h4>
              <a href="mailto:info@tryseoservices.com">
                info@tryseoservices.com
              </a>
            </div>
          </div>
        </div>
        <div className="LpMedicalContact-content">
          <div className="LpMedicalContact-social">
            <a href="https://www.facebook.com/tryseoservices">
              {" "}
              <FontAwesomeIcon
                icon={faFacebook}
                className="LpMedicalContact-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="LpMedicalContact-social">
            <a href="https://x.com/tryseoservices">
              {" "}
              <FontAwesomeIcon
                icon={faXTwitter}
                className="LpMedicalContact-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="LpMedicalContact-social">
            <a href="https://www.linkedin.com/company/tryseoservices/">
              {" "}
              <FontAwesomeIcon
                icon={faLinkedin}
                className="LpMedicalContact-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="LpMedicalContact-social">
            <a href="https://www.instagram.com/tryseoservices/">
              {" "}
              <FontAwesomeIcon
                icon={faInstagram}
                className="LpMedicalContact-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="LpMedicalContact-social">
            <a href="https://www.youtube.com/@tryseoservices">
              {" "}
              <FontAwesomeIcon
                icon={faYoutube}
                className="LpMedicalContact-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
      <div className="LpMedicalContact-wrapper">
        <div className="LpMedicalContact-form">
          <h2>Send us a message</h2>
          <form action="" onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Your name" required />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
            />
            <input
              type="phone"
              name="phone"
              placeholder="+088-234-6849"
              required
            />
            <textarea
              name="message"
              placeholder="Write your message here..."
              required
            ></textarea>
            <button className="frutiger-button" onSubmit={onSubmit}>
              <div className="inner">
                <span className="text">Book Appointment</span>
              </div>
            </button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LpMedicalContact;
