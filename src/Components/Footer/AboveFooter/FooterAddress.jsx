import React from "react";
import "./../Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const FooterAddress = (props) => {
  return (
    <div className="footerAddress">
      <h4>{props.addressHead}</h4>
      <li>
        <FontAwesomeIcon
          icon={faLocationDot}
          className="footerAdd"
        ></FontAwesomeIcon>
        <p>{props.footerAddress}</p>
      </li>
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

export default FooterAddress;
