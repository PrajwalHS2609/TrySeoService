import React, { useRef, useState } from "react";
import "./Lp1Package.css";
import { Link } from "react-router-dom";
import check from "./../../../../Img/check-mark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
const Lp1CityPackageCard = () => {
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
        <h4>City SEO</h4>
        <div className="lp1PackageCardCover-price">
          <FontAwesomeIcon
            icon={faIndianRupeeSign}
            className="lp1PackageCardIco"
          ></FontAwesomeIcon>
          15000 /<small>monthly only</small>
        </div>
        <ul>
          <li>
            <img src={check} alt="check" />
            Website SEO Analysis
          </li>
          <li>
            <img src={check} alt="check" />
            Website Architecture
          </li>
          <li>
            <img src={check} alt="check" />
            Keyword Research
          </li>
          <li>
            <img src={check} alt="check" />
            Title Optimization
          </li>
          <div className="dropMoreContent" ref={switchRef}>
            <li>
              {" "}
              <img src={check} alt="check" />
              Content Optimization
            </li>
            <li>
              {" "}
              <img src={check} alt="check" />
              Internal Linking
            </li>
            <li>
              {" "}
              <img src={check} alt="check" />
              URL Optimization
            </li>
            <li>
              {" "}
              <img src={check} alt="check" />
              Image Optimization
            </li>
            <li>
              {" "}
              <img src={check} alt="check" />
              Heading's Optimization
            </li>
            <li>
              {" "}
              <img src={check} alt="check" />
              Error Fixing
            </li>
            <li>
              {" "}
              <img src={check} alt="check" />
              Google Product's Integration
            </li>{" "}
            <li>
              {" "}
              <img src={check} alt="check" />
              Search Engine Crawling
            </li>{" "}
            <li>
              {" "}
              <img src={check} alt="check" />
              Website Speed Optimization
            </li>{" "}
            <li>
              {" "}
              <img src={check} alt="check" />
              Google Map Optimization
            </li>{" "}
            <li>
              {" "}
              <img src={check} alt="check" />
              CTA Creation
            </li>{" "}
            <li>
              {" "}
              <img src={check} alt="check" />
              Content Highlight in SERP
            </li>{" "}
            <li>
              {" "}
              <img src={check} alt="check" />
              SEO Consultation
            </li>{" "}
            <li>
              {" "}
              <img src={check} alt="check" />
              100% Guaranteed Result
            </li>
            <li>
              {" "}
              <img src={check} alt="check" />
              Keyword's Ranking Report
            </li>{" "}
            <li>
              {" "}
              <img src={check} alt="check" />
              Call & What's App Support
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

export default Lp1CityPackageCard;
