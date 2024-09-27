import React from "react";
import "./../Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const footerSocialIco = () => {
  return (
    <div className="footerSocial">
      <li>
        {" "}
        <a href="https://www.facebook.com/tryseoservices">
          {" "}
          <FontAwesomeIcon
            icon={faFacebook}
            className="footerSocialIco"
          ></FontAwesomeIcon>
        </a>
      </li>
      <li>
        {" "}
        <a href="https://x.com/tryseoservices">
          {" "}
          <FontAwesomeIcon
            icon={faXTwitter}
            className="footerSocialIco"
          ></FontAwesomeIcon>
        </a>
      </li>
      <li>
        {" "}
        <a href="https://www.linkedin.com/company/tryseoservices/">
          {" "}
          <FontAwesomeIcon
            icon={faLinkedin}
            className="footerSocialIco"
          ></FontAwesomeIcon>
        </a>
      </li>
      <li>
        {" "}
        <a href="https://www.instagram.com/tryseoservices/">
          {" "}
          <FontAwesomeIcon
            icon={faInstagram}
            className="footerSocialIco"
          ></FontAwesomeIcon>
        </a>
      </li>
      <li>
        {" "}
        <a href="https://www.youtube.com/@tryseoservices">
          {" "}
          <FontAwesomeIcon
            icon={faYoutube}
            className="footerSocialIco"
          ></FontAwesomeIcon>
        </a>
      </li>
    </div>
  );
};

export default footerSocialIco;
