import React from "react";
import "./Lp1Header.css";
import { Link } from "react-router-dom";
const Lp1Performance = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="lp1Performance">
      <img
        src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-h3-f-img-1.png"
        alt=""
      />
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
