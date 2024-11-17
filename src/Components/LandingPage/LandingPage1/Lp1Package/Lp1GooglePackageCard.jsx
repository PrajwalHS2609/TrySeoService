import React, { useRef, useState } from "react";
import "./Lp1Package.css";
import { Link } from "react-router-dom";
import check from "./../../../../Img/check-mark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
const Lp1GooglePackageCard = (props) => {
  let [drop, setDrop] = useState(false);
  let switchRef = useRef();
  const handleReadMore = () => {
    if (!drop) {
      setDrop(true);
      switchRef.current.style.display = "flex";
    } else {
      setDrop(false);
      switchRef.current.style.display = "none";
    }
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
          <div className="dropMoreContent" ref={switchRef}>
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
          </div>
          <div className="lpPackageReadMore-Btn">
            {" "}
            <button onClick={handleReadMore}>
              Load {drop ? "Less" : "More"}
            </button>
          </div>
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

export default Lp1GooglePackageCard;
