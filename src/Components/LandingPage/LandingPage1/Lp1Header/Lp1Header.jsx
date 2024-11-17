import React from "react";
import "./Lp1Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import Lp1Performance from "./Lp1Performance";
const Lp1Header = () => {
  return (
    <div className="lp1Header" id="Header">
      <div className="lp1HeaderContent">
        <h6>WELCOME TO TRYSEOSERVICE</h6>
        <h2>We Boost Your Healthcare Reach with Expert SEO Services!</h2>
        <p>
          For High Quality Traffic, Qualified Leads, Online Sales, Maximum
          Reach, & Search Ranking.
        </p>
        <button>
          <Link to="/">
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              className="lpHeaderIcon"
            ></FontAwesomeIcon>
            Call Us Today!{" "}
          </Link>
        </button>
      </div>
      <div className="lp1HeaderContent">
        <img
          src="https://kfkit.rometheme.pro/beevo/wp-content/uploads/sites/79/2024/01/man-hipster-face-copyspace-fashion-smile-young-han-5UNZ7KN.png"
          alt=""
        />
      </div>
      <div className="lp1Performance-Container">
        <Lp1Performance />
      </div>
    </div>
  );
};

export default Lp1Header;
