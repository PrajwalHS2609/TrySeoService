import React from "react";
import "./Lp1Why.css";
import CountUp from "react-countup";
const Lp1Why = () => {
  return (
    <div className="lp1Why">
      <div className="lp1WhyContent">
        <h2>
          <CountUp end={96} duration={10} />%
        </h2>
        <div className="lpWhyContentCover">
          <h3>Client Retention</h3>
        </div>
      </div>
      <div className="lp1WhyContent">
        <h2>
          <CountUp end={5} duration={10} />
        </h2>
        <div className="lpWhyContentCover">
          <h3>Years of Service</h3>
        </div>
      </div>
      <div className="lp1WhyContent">
        <h2>
          {" "}
          <CountUp end={8} duration={10} />+
        </h2>
        <div className="lpWhyContentCover">
          <h3>Professionals</h3>
        </div>
      </div>
      <div className="lp1WhyContent">
        <h2>
          {" "}
          <CountUp end={22} duration={10} />+
        </h2>
        <div className="lpWhyContentCover">
          <h3>Satisfied Clients</h3>
        </div>
      </div>
    </div>
  );
};

export default Lp1Why;
