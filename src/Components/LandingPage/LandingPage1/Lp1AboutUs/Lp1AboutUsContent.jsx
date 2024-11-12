import React from "react";
import "./Lp1AboutUs.css";
const Lp1AboutUsContent = () => {
  return (
    <div className="lp1AboutUsContent">
      <h6>ABOUT US</h6>
      <h2>Our Agency's Story in the Marketing Landscape</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at enim
        imperdie rhoncus turpis eu, tincidunt nisl. Sed purus tellus,
        pellentesque ut tempor in, finibus in magna. Sed velit lectus, tristique
        nec fringilla in, congue bibendum justo. Curabitur sit amet sem vitae
        quam egestas varius non.
      </p>
      <div className="lp1AboutUsContentList">
        <li>
          <img
            src="https://kfkit.rometheme.pro/beevo/wp-content/uploads/sites/79/2024/01/Icon-1.png"
            alt=""
          />{" "}
          <div className="lp1AboutUsContentList-Content">
            <h4>Proven Track Record</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
        </li>
        <li>
          <img
            src="https://kfkit.rometheme.pro/beevo/wp-content/uploads/sites/79/2024/01/Icon-2.png"
            alt=""
          />{" "}
          <div className="lp1AboutUsContentList-Content">
            <h4>Tailored Strategies</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Lp1AboutUsContent;
