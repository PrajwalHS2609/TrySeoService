import React from 'react'
import "./PopUp.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import PopUpForm from './PopUpForm';
const PopUp = () => {
    let handleExit = (e) => {
        e.preventDefault();
        document.querySelector(".popup").style.display = "none";
      };
  return (
    <div className="popup">
    <div className="popUpContainer">
      <div className="popUpContent">
        <FontAwesomeIcon
          icon={faX}
          className="popupIcon"
          onClick={handleExit}
        ></FontAwesomeIcon>
      </div>
      <div className="popUpContent">
        <PopUpForm />
      </div>{" "}
    </div>
  </div>
  )
}

export default PopUp
