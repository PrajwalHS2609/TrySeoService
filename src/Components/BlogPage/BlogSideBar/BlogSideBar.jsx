import React from "react";
import "./BlogSideBar.css";
import BlogPost from "./BlogPost/BlogPost";
import BlogCategories from "./BlogCategories/BlogCategories";

const BlogSideBar = () => {
  return (
    <div className="blogSideBar-container">
      <BlogPost />
      <BlogCategories />
    </div>
  );
};

export default BlogSideBar;
