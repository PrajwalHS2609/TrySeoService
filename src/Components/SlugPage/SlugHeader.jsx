import React from "react";
import "./SlugPage.css";
const SlugHeader = (props) => {
  return (
    <div className="slugHeader-container">
      <h1>{props.headTitle}</h1>
    </div>
  );
};

export default SlugHeader;
