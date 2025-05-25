import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { Helmet } from "react-helmet-async";
import client from "../../client";
import BlogSideBar from "./../BlogPage/BlogSideBar/BlogSideBar";
import "./../BlogPage/BlogSideBar/BlogSideBar.css";
import "./SlugPage.css";
import SlugHeader from "./SlugHeader";
import BlogAuthor from "../BlogPage/BlogAuthor/BlogAuthor";
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

    // Main fetch query for both post and serviceCategory
    client
      .fetch(
        `{
          "post": *[_type == "post" && slug.current == $slug][0]{
            title,
            body,
            mainImage{
              asset->{_id,url},
              alt
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

  // Separate test for serviceCategory to debug mainImage specifically
  useEffect(() => {
    if (!slug) return;
    client
      .fetch(
        `*[_type == "ServiceCategory" && slug.current == $slug][0]{
          title,
          mainImage {
            asset->{_id, url},
            alt
          }
        }`,
        { slug }
      )
      .then((data) => {
        console.log("Debug ServiceCategory fetch:", data);
      })
      .catch(console.error);
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
                  <PortableText value={blogPost.body} />
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
          <div className="slugService-imgContainer">
            {/* {servicePage.mainImage?.asset?.url && (
              <img
                src={servicePage.mainImage.asset.url}
                alt={servicePage.mainImage.alt || servicePage.title}
                className="blog__image rounded-t"
              />
            )} */}
            <SlugHeader
              headTitle={servicePage.title}
              img={servicePage.mainImage.asset.url}
              alt={servicePage.title}
            />
          </div>
          <div className="exploreSeoOptimizing">
            {/* <h1>{servicePage.title}</h1> */}
            {isValidBlocks(servicePage.body1) && (
              <PortableText value={servicePage.body1} />
            )}
            {isValidBlocks(servicePage.body2) && (
              <PortableText value={servicePage.body2} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
