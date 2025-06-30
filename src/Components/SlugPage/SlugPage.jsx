import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import "./SlugPage.css";
import client from "../../client";
import SlugHeader from "./SlugHeader";
import imageUrlBuilder from "@sanity/image-url";
import BlogSideBar from './../BlogPage/BlogSideBar/BlogSideBar';
import { Helmet } from "react-helmet-async";
import BlogAuthor from './../BlogPage/BlogAuthor/BlogAuthor';

// ✅ Build image URLs
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// ✅ PortableText components (handles image blocks!)
const portableComponents = {
  types: {
    image: ({ value }) => {
      return (
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || ""}
          style={{ maxWidth: "100%", height: "auto", margin: "1rem 0" }}
        />
      );
    },
  },
};

function isValidBlocks(blocks) {
  return (
    Array.isArray(blocks) &&
    blocks.length > 0 &&
    typeof blocks[0] === "object" &&
    blocks[0]._type
  );
}

export default function SlugPage() {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [servicePage, setServicePage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    setIsLoading(true);

    client
      .fetch(
        `{
          "post": *[_type == "post" && slug.current == $slug][0]{
            title,
            body,
            mainImage{
              asset->{_id,url},
              alt
            },
            source {
              text,
              url
            }
          },

          "serviceCategory": *[_type == "ServiceCategory" && slug.current == $slug][0]{
            title,
            mainImage {
              asset->{_id, url},
              alt
            },
            body1,
            body2,
            metaTitle,
            metaDescription
          }
        }`,
        { slug }
      )
      .then((data) => {
        console.log("Sanity fetch full data:", data);
        setBlogPost(data.post || null);
        setServicePage(data.serviceCategory || null);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) return <h1>Loading...</h1>;
  if (!blogPost && !servicePage) return <h1>No content found.</h1>;

  return (
    <div className="slug-container">
      <Helmet>
        <title>{blogPost?.title || servicePage?.title}</title>
        <meta
          name="description"
          content={blogPost?.title || servicePage?.title}
        />
      </Helmet>

      {blogPost && (
        <>
          <div className="blog-wrapper1">
            {blogPost.mainImage?.asset?.url && (
              <img
                src={blogPost.mainImage.asset.url}
                alt={blogPost.mainImage.alt || blogPost.title}
                className="blog__image rounded-t"
              />
            )}
            <div className="exploreSeoOptimizing">
              <h1>{blogPost.title}</h1>
              {isValidBlocks(blogPost.body) ? (
                <>
                  <PortableText
                    value={blogPost.body}
                    components={portableComponents}
                  />
                  {blogPost.source?.url && blogPost.source?.text && (
                    <p className="source-link">
                      Source:{" "}
                      <a
                        href={blogPost.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {blogPost.source.text}
                      </a>
                    </p>
                  )}
                  <BlogAuthor/>
                </>
              ) : (
                <p>No valid content to display.</p>
              )}
            </div>
          </div>
          <div className="blog-wrapper2">
            <BlogSideBar />
          </div>
        </>
      )}

      {servicePage && (
        <div className="slugService-container">
          {servicePage.mainImage?.asset?.url && (
            <SlugHeader
              img={servicePage.mainImage.asset.url}
              head={servicePage.title}
            />
          )}
          <div className="exploreSeoOptimizing">
            <h1>{servicePage.title}</h1>
            {isValidBlocks(servicePage.body1) && (
              <PortableText
                value={servicePage.body1}
                components={portableComponents}
              />
            )}

            {isValidBlocks(servicePage.body2) && (
              <PortableText
                value={servicePage.body2}
                components={portableComponents}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
