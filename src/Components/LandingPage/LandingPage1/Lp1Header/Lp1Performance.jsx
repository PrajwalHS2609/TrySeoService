import React from "react";
import "./Lp1Header.css";
import { Link } from "react-router-dom";
const Lp1Performance = () => {
  return (
    <div className="lp1Performance">
      <img
        src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-h3-f-img-1.png"
        alt=""
      />
      <div className="lp1PerformanceContent">
        <h6>WITH SEO OPTIMIZATION</h6>
        <h3>Putting our focus On Changing the Way of Web & Mobile UX.</h3>
        <p></p>
      </div>
      <Link to={"/"}>
        {" "}
        <button>Learn More</button>
      </Link>
    </div>
  );
};

export default Lp1Performance;
