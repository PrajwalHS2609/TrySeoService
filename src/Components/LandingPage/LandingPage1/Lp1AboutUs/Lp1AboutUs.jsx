import React from "react";
import "./Lp1AboutUs.css";
import Lp1AboutUsContent from "./Lp1AboutUsContent";
const Lp1AboutUs = () => {
  return (
    <div className="lp1AboutUs" id="about-us">
      <div className="lp1AboutUsWrapper">
        <div className="lp1AboutUsItem">
          <img
            src="https://kfkit.rometheme.pro/beevo/wp-content/uploads/sites/79/2024/01/nominated-YEKGWYZ.jpg"
            alt=""
          />
          <img
            src="https://kfkit.rometheme.pro/beevo/wp-content/uploads/sites/79/2024/01/business-W6FQDDB.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="lp1AboutUsWrapper">
        <Lp1AboutUsContent />
      </div>
    </div>
  );
};

export default Lp1AboutUs;
