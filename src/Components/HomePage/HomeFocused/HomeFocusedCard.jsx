import React from "react";
import "./HomeFocused.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeFocusedCard = (props) => {
  return (
    <div className="homeFocusedCard">
      <FontAwesomeIcon
        icon={props.focusIcon}
        className="homeFocusCardIco"
      ></FontAwesomeIcon>
      <h6>{props.txt}</h6>
    </div>
  );
};

export default HomeFocusedCard;
