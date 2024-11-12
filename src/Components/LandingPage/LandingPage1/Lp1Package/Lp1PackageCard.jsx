import React from "react";
import "./Lp1Package.css";
import { Link } from "react-router-dom";
import check from "./../../../../Img/check-mark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
const Lp1PackageCard = () => {
  return (
    <div className="lp1PackageCard">
      <img
        src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-p3-item-bg-1.png"
        alt=""
      />
      <div className="lp1PackageCardCover">
        <h4>Business</h4>
        <div className="lp1PackageCardCover-price">
          <FontAwesomeIcon
            icon={faIndianRupeeSign}
            className="homeArrow"
          ></FontAwesomeIcon>
          15000/
          <small>only</small>
        </div>
        <p>we are 100+ professional software 10 years of experience</p>
        <ul>
          <li>
            <img src={check} alt="check" /> Application Development
          </li>
          <li>
            <img src={check} alt="check" /> Consulting and Implementation

          </li>
          <li>
            <img src={check} alt="check" /> Machine And Deep Learning

          </li>
          <li>
            <img src={check} alt="check" /> Data Quality Management

          </li>
        </ul>
        <div className="lp1PackageCardCover-btn">
          {" "}
          <Link to={"/"}>
            <button>Choose Plan</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lp1PackageCard;
