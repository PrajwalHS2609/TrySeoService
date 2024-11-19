import React from "react";
import "./Lp1Header.css";
import { Link } from "react-router-dom";
import performanceImg from "./../../../../Img/Lp/performance.png";
const Lp1Performance = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="lp1Performance">
      <img src={performanceImg} alt="performanceImg" loading="lazy" />
      <div className="lp1PerformanceContent">
        <h6>WITH SEO OPTIMIZATION</h6>
        <h3>
          Proven strategies to boost your business with enhanced SEO, smart
          keyword ideas, and competitor analysis.
        </h3>
        <p></p>
      </div>
      <Link to={"/"}>
        {" "}
        <button onClick={handlePopUp}>Book A Call</button>
      </Link>
    </div>
  );
};

export default Lp1Performance;
