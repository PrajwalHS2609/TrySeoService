import React from "react";
import BlobAnim from "../HomePage/BlobAnim";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

const BlogHeader = () => {
  return (
    <div className="contactUsHeader">
      <div className="contactBlob">
        <BlobAnim />
      </div>
      <h2>Blog</h2>
      <BreadCrumb txt="Blog" />
    </div>
  );
};

export default BlogHeader;
