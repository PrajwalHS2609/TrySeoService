import React from "react";
import "./Lp1Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import Lp1Performance from "./Lp1Performance";
import bannerImg from "./../../../../Img/Lp/Banner Image/bannerImg.png";
const Lp1Header = () => {
  return (
    <div className="lp1Header" id="Header">
      <div className="lp1HeaderContent">
        <h6>WELCOME TO TRYSEOSERVICE</h6>
        <h2>
          We Boost Your Healthcare Reach with Expert <span> SEO Services</span>!
        </h2>
        <p>
          For High Quality Traffic, Qualified Leads, Online Sales, Maximum
          Reach, & Search Ranking.
        </p>
        <button>
          <a href="tel:6360226773">
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              className="lpHeaderIcon"
            ></FontAwesomeIcon>
            Call Us Today!{" "}
          </a>
        </button>
      </div>
      <div className="lp1HeaderContent">
        <img src={bannerImg} alt="bannerImg" />
      </div>
      <div className="lp1Performance-Container">
        <Lp1Performance />
      </div>
    </div>
  );
};

export default Lp1Header;
