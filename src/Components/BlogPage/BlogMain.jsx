import React from "react";
import "./BlogPage.css";
import BlogCard from "./BlogCard";
import explore from "./../../Img/Blog/BlogMain/Explore SEO Strategies for Optimizing eCommerce Stores.png";
import localSeo from "./../../Img/Blog/BlogMain/Local SEO Secrets_ Get Ahead in Your Hometown.png";
import impOnPageSeo from "./../../Img/Blog/BlogMain/Importance of On-page SEO Optimization for Website.png";
import seoGuide from "./../../Img/Blog/BlogMain/SeoGuide.png";
import powerGoogleAds from "./../../Img/Blog/BlogMain/Power of Google Ads_ Why It’s Essential for Your Business.png";
import topSeo from "./../../Img/Blog/BlogMain/ExploringTopSeo.png";
import whatIs from "./../../Img/Blog/BlogMain/What is On-Page SEO_ Why it is important for every websites.png";
import transform from "./../../Img/Blog/BlogMain/Transforming Foreign Language School of Bangalore.png";
import howSeo from "./../../Img/Blog/BlogMain/How SEO Services Can Boost Attestation Service Providers in Bangalore.png";
import LongTailKeywords from "./../../Img/Blog/BlogMain/Long-Tail Keywords.png";
import Top10Reasons from "./../../Img/Blog/BlogMain/Top 10 Reasons Why Every Business Needs an SEO Audit.png";
import googlePositioning from "./../../Img/Blog/BlogMain/The Essential Guide to Boosting Your Google Search Engine Positioning.png";
import SanityBlog from "./SanityBlog/SanityBlog";

const blogPosts = [
  {
    img: explore,
    alt: "Explore SEO",
    head: "Explore SEO Strategies for Optimizing eCommerce Stores",
    para: "In the ever-evolving digital landscape, eCommerce has become the cornerstone of modern retail...",
    link: "/explore-seo-strategies-for-optimizing-ecommerce-stores",
  },
  {
    img: localSeo,
    alt: "Local SEO Secrets",
    head: "Local SEO Secrets: Get Ahead in Your Hometown",
    para: "In the digital age, local businesses are no longer confined to their physical storefronts. Thanks to the power of...",
    link: "/local-seo-secrets-get-ahead-in-your-hometown",
  },
  {
    img: impOnPageSeo,
    alt: "Importance of On-page SEO",
    head: "Importance of On-page SEO Optimization for Website",
    para: "In today’s digital age, where the internet is the go-to place for information, products, and services, having a website is...",
    link: "/importance-of-on-page-seo-optimization-for-website",
  },
  {
    img: seoGuide,
    alt: "Technical SEO Guide",
    head: "The Comprehensive Technical SEO Guide: Mastering the Digital Foundation",
    para: "In the ever-evolving landscape of digital marketing, staying on top of search engine optimization (SEO) trends is crucial for...",
    link: "/the-comprehensive-technical-seo-guide",
  },
  {
    img: powerGoogleAds,
    alt: "Power of Google Ads",
    head: "Power of Google Ads: Why It’s Essential for Your Business",
    para: "In the fast-paced digital age, where every click and impression can make or break a business, staying relevant and...",
    link: "/power-of-google-ads-why-its-essential-for-your-business",
  },
  {
    img: topSeo,
    alt: "Exploring the Top SEO",
    head: "Exploring the Top SEO Services to Boost Tours & Travel Service Providers in Bangalore",
    para: "The tourism and travel industry has been a significant contributor to Bangalore’s economy. With a plethora of...",
    link: "/exploring-the-top-seo-services-to-boost-tours-and-travel-service-providers-in-bangalore",
  },
  {
    img: whatIs,
    alt: "What is On-Page SEO",
    head: "What is On-Page SEO? Why it is important for every website?",
    para: "On-Page SEO refers to the optimization of various elements and aspects on individual web pages to improve their visibility and...",
    link: "/what-is-on-page-seo-why-it-is-important-for-every-websites",
  },
  {
    img: transform,
    alt: "Transforming Foreign Language",
    head: "Transforming Foreign Language School of Bangalore",
    para: "The Foreign Language School of Bangalore, a premier institution offering courses in languages such as German, Spanish, and French, was...",
    link: "/transforming-foreign-language-school-of-bangalore",
  },
  {
    img: howSeo,
    alt: "How SEO Services Can Boost",
    head: "How SEO Services Can Boost Attestation Service Providers in Bangalore",
    para: "In today’s digital age, establishing a strong online presence is essential...",
    link: "/how-seo-services-can-boost-attestation-service-providers-in-bangalore",
  },
  {
    img: LongTailKeywords,
    alt: "Long Tail Keywords",
    head: "The Power of Long-Tail Keywords: How to Find and Use Them",
    para: "In the world of Search Engine Optimization (SEO), keywords are the foundation of any successful...",
    link: "/the-power-of-long-tail-keywords-how-to-find-and-use-them",
  },
  {
    img: Top10Reasons,
    alt: "Top 10 Reasons for SEO Audit",
    head: "Top 10 Reasons Why Every Business Needs an SEO Audit",
    para: "In today's digital age, the success of any business relies heavily on its online presence. SEO plays...",
    link: "/top-10-reasons-why-every-business-needs-an-seo-audit",
  },
  {
    img: googlePositioning,
    alt: "Boost Google Positioning",
    head: "The Essential Guide to Boosting Your Google Search Engine Positioning",
    para: "After spending countless hours crafting your website and optimizing its content...",
    link: "/google-search-engine-positioning-understanding-it-and-boosting-your-rankings",
  },
];

const BlogMain = () => {
  return (
    <>
      <div className="blogMain">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            img={post.img}
            alt={post.alt}
            head={post.head}
            para={post.para}
            link={post.link}
          />
        ))}
      </div>
      <div className="blogWrapper">
        <SanityBlog />
      </div>
    </>
  );
};

export default BlogMain;
