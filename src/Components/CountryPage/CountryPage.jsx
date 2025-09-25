// src/Components/CountryPage/CountryPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import "./CountryPage.css";
import CountryHeader from "./CountryHeader";

// Create an image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

function CountryPage() {
  const { countryCode, slug } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    const query = `*[_type == "countryPage" && slug.current == $slug && country == $country][0]{
      title,
      content,
      image {
        asset->{
          _id,
          url
        },
        alt
      }
    }`;

    client
      .fetch(query, { slug, country: countryCode.toUpperCase() })
      .then(setPage)
      .catch(console.error);
  }, [slug, countryCode]);

  if (!page) return <p>Loading...</p>;

  return (
    <div className="country-page">
      {/* Pass image to CountryHeader */}
      <CountryHeader
        title={page.title}
        img={page.image ? urlFor(page.image.asset).width(1200).url() : ""}
      />

      <div className="countryPage-content">
        <h1>{page.title}</h1>

        <PortableText value={page.content} />
      </div>
    </div>
  );
}

export default CountryPage;
