import React, { useEffect, useState } from "react";
import "./../BlogSideBar.css";

import { Link } from "react-router-dom";
import client from "../../../../client";
export default function BlogPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        _id,
        title,
        slug,
        description,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => {
        console.log("Fetched posts:", data); // 🔍 Add this
        setPosts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="blogPost-container">
      <ul>
        <h2>Recent Posts</h2>
        {posts.map((post) => (
          <Link to={`/${post.slug.current}`}>
            <li>
              {post.mainImage?.asset?.url && (
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  width={550}
                  height={310}
                />
              )}
              <h4>{post.title}</h4>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
