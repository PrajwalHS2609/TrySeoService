import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./BlogAuthor.css";
import { PortableText } from "@portabletext/react";
import client from "./../../../client";
import "./BlogAuthor.css";
import { useEffect } from "react";
import { useState } from "react";

export default function BlogAuthor() {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "author"] {
  _id,
  name,
  designation,
 slug,
"bio": bio[]{..., asset->},
  mainImage{
      ...,
      asset->{
        _id,
        url
      }
    }

}`
      )
      .then((data) => {
        console.log("Fetched author:", data); // 🔍 Add this
        setAuthor(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="blogAuthorContainer">
      {author.map((author) => (
        <div key={author._id}>
          <div className="blogAuthorContent">
            <div className="blogAuthorImg">
              {author.mainImage?.asset?.url && (
                <img
                  src={author.mainImage.asset.url}
                  alt={author.name || "Author image"}
                />
              )}
            </div>
            <div className="blogAuthorName">
              <h4>{author.designation}</h4>
              <h3>{author.name}</h3>
            </div>
          </div>
          <div className="blogAuthorContent">
            <p>
              {" "}
              <PortableText value={author.bio} />
            </p>
          </div>
          <div className="blogAuthorSocial">
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon
                icon={faInstagram}
                className="authorSocialIcon"
              ></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="authorSocialIcon"
              ></FontAwesomeIcon>
            </a>
            <a href="https://x.com/">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="authorSocialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
