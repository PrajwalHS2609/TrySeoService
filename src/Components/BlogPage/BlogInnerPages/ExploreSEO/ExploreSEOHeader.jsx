import React from "react";
import BlobAnim from "../../../HomePage/BlobAnim";
import InnerBreadCrumbs from "../../../BreadCrumb/InnerBreadCrumbs";

const ExploreSEOHeader = (props) => {
  return (
    <div className="contactUsHeader">
      <div className="contactBlob">
        <BlobAnim />
      </div>
      <h2>{props.head}</h2>
      <InnerBreadCrumbs txt={props.txt} />
    </div>
  );
};

export default ExploreSEOHeader;
