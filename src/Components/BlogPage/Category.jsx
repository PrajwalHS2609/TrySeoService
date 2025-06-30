import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogPage.css";
import client from "../../client";
import BlogHeader from "./BlogHeader";

export default function CategoryPage() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!category) return;

    client
      .fetch(
        `*[_type == "post" && $category in categories[]->slug.current] | order(publishedAt desc) {
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
        }`,
        { category: category.toLowerCase() }
      )
      .then((data) => {
        console.log("Fetched category posts:", data);
        setPosts(data);
      })
      .catch(console.error);
  }, [category]);

  return (
    <div className="blogMain" id="blogCategory-container">
      {/* <SlugHeader img={BlogImg} head="OUR BLOG" /> */}
      <BlogHeader />

      {/* <h2>{category?.toUpperCase()}</h2> */}

      {posts.length > 0 ? (
        posts.map((post) => (
          <div className="blogCard" key={post._id}>
            <div className="blogImg">
              {post.mainImage?.asset?.url && (
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  width={550}
                  height={310}
                />
              )}
            </div>
            <h4 className="blogCardH4">{post.title}</h4>
            <p>{post.description}</p>
            <div className="blogBtn">
              <Link to={`/${post.slug.current}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center" }}>No posts found in this category.</p>
      )}
    </div>
  );
}
