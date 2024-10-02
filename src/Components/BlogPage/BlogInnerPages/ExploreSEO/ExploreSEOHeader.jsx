import React from "react";
import BreadCrumb from "../../../BreadCrumb/BreadCrumb";
import BlobAnim from "../../../HomePage/BlobAnim";

const ExploreSEOHeader = (props) => {
  return (
    <div className="contactUsHeader">
      <div className="contactBlob">
        <BlobAnim />
      </div>
      <h2>{props.head}</h2>
      <BreadCrumb txt={props.txt} />
    </div>
  );
};

export default ExploreSEOHeader;
