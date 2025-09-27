import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import  client  from "../../../client";

export default function Blog() {
    const [posts, setPosts] = useState([]);
  const countryCode =
    localStorage.getItem("preferredCountry")?.toLowerCase() || "";

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
    <div className="blogMain">
      {posts.map((post) => (
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
            <Link to={`/${countryCode}/${post.slug.current}`}>
              <button>Read More </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
