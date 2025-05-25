import React from "react";
import "./SlugPage.css";
const SlugHeader = (props) => {
  return (
    <div className="slugHeader-container">
      <img src={props.img} alt={props.alt} />
     <div className="slugHeader-cover">
       <h1>{props.headTitle}</h1>
     </div>
    </div>
  );
};

export default SlugHeader;
