import React from "react";
import "./BlogPage.css";
import { Link } from "react-router-dom";
const BlogCard = (props) => {
  return (
    <div className="blogCard">
      <div className="blogImg">
        <img src={props.img} alt={props.alt} loading="lazy" />
      </div>
      <h4 className="blogCardH4">{props.head}</h4>
      <p>{props.para}</p>
      <div className="blogBtn">
        <Link to={props.link}>
          <button>Read More </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
