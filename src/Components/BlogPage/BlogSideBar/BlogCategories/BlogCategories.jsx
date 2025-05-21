import React from "react";
import { Link } from "react-router-dom";
import "./../../BlogPage.css";

const BlogCategories = () => {
  return (
    <div className="blogCategories-container">
      <ul>
        <h2>Categories</h2>
        <li>
          <Link to={"/blog"}>All</Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogCategories;
