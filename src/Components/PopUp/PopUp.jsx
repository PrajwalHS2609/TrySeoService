import React from "react";
import "./PopUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import PopUpForm from "./PopUpForm";
const PopUp = () => {
  return (
    <div className="popup">
      <div className="popUpContainer">
        <PopUpForm />
      </div>
    </div>
  );
};

export default PopUp;
