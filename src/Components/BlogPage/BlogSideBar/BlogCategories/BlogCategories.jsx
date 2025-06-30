import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Use React Router
import client from "../../../../client";
import "./../BlogSideBar.css"
const CATEGORY_QUERY = `*[_type == "blogCategory"] | order(title asc){
  _id,
  title,
  slug
}`;

export default function BlogCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await client.fetch(CATEGORY_QUERY);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="blogCategories-container">
      <ul>
        <h2>Categories</h2>
        <Link to="/blog">
          <li>All</li>
        </Link>

        {categories
          .filter((category) => category.slug && category.slug.current)
          .map((category) => (
            <Link to={`/category/${category.slug.current}`}>
              <li key={category._id}>{category.title}</li>
            </Link>
          ))}
      </ul>
    </div>
  );
}
