import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./HomeService.css";
import { Link } from "react-router-dom";
const HomeServiceCard = (props) => {
  return (
    <div className="homeServiceCard">
      <div className="homeServiceCardContent1">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="homeServiceCardContent2">
        <h5>{props.head1}</h5>
        <h3>{props.head2}</h3>
      </div>
      <div className="homeServiceCardContent3">
        <p>{props.para}</p>
      </div>
      <div className="homeServiceCardContent4">
        <Link to={"/"}>
          {" "}
          <button>
            {" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="servArrow"
            ></FontAwesomeIcon>
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServiceCard;
