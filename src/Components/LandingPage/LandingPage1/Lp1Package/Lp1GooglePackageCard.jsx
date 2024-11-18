import React from "react";
import "./Lp1Package.css";
import { Link } from "react-router-dom";
import check from "./../../../../Img/check-mark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
const Lp1GooglePackageCard = (props) => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="lp1PackageCard">
      <div className="lp1PackageCardCover">
        <h4>Google My Business</h4>
        <div className="lp1PackageCardCover-price">
          <FontAwesomeIcon
            icon={faIndianRupeeSign}
            className="lp1PackageCardIco"
          ></FontAwesomeIcon>
          5000 /<small>monthly only</small>
        </div>
        <ul>
          <li>
            <img src={check} alt="check" /> Business Listing
          </li>
          <li>
            <img src={check} alt="check" /> Local Ranking
          </li>
          <li>
            <img src={check} alt="check" /> Business Description
          </li>
          <li>
            <img src={check} alt="check" />
            Posts
          </li>
          <li>
            {" "}
            <img src={check} alt="check" />
            Images & Videos
          </li>
          <li>
            {" "}
            <img src={check} alt="check" />
            Product & Services
          </li>
          <li>
            {" "}
            <img src={check} alt="check" />
            Reputation Management
          </li>
          <li>
            {" "}
            <img src={check} alt="check" />Q & A
          </li>
          <li>
            {" "}
            <img src={check} alt="check" />
            Monthly Performance Report
          </li>
        </ul>
        <div className="lp1PackageCardCover-btn">
          {" "}
          <Link to={"/"}>
            <button onClick={handlePopUp}>Choose Plan</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lp1GooglePackageCard;
