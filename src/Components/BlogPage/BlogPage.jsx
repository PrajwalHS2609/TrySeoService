import React from "react";
import "./BlogPage.css";
import BlogHeader from "./BlogHeader";
import BlogMain from "./BlogMain";

const BlogPage = () => {
  return (
    <div className="homePageContainer">
      <BlogHeader />
      <BlogMain/>
    </div>
  );
};

export default BlogPage;
