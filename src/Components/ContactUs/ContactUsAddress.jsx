import React from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const ContactUsAddress = () => {
  return (
    <div className="contactUsAddress">
      <h6>CONTACT DETAILS</h6>
      <h3>Main Office</h3>
      <p>
        Give us a call or drop by anytime, we endeavour to answer all enquiries
        within 24 hours on business days. We will be happy to answer your
        questions.
      </p>
      <li>
        <FontAwesomeIcon
          icon={faLocationDot}
          className="footerAdd"
        ></FontAwesomeIcon>
        <p>
          513, 4th C Main Rd, near Bandhan Bank, HRBR Layout 2nd Block, HRBR
          Layout, Kalyan Nagar, Bengaluru, Karnataka 560043
        </p>
      </li>{" "}
      <li>
        {" "}
        <FontAwesomeIcon
          icon={faPhoneVolume}
          className="footerAdd"
        ></FontAwesomeIcon>
        <p>
          <a href="tel:6360226773"> +91 6360226773</a>
        </p>
      </li>
      <li>
        {" "}
        <FontAwesomeIcon
          icon={faEnvelope}
          className="footerAdd"
        ></FontAwesomeIcon>
        <p>
          <a href="mailto:info@tryseoservices.com">info@tryseoservices.com</a>
        </p>
      </li>
    </div>
  );
};

export default ContactUsAddress;
