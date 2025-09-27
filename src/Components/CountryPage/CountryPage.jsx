import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import "./CountryPage.css";
import CountryHeader from "./CountryHeader";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// const countryMap = {
//   fr: "France",
//   in: "India",
//   de: "Germany",
//   us: "United States",
//   uk: "United Kingdom",
//   ca: "Canada",
//   au: "Australia",
//   jp: "Japan",
//   ae: "UAE",
// };

function CountryPage() {
  const { countryCode, slug } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  if (!countryCode || !slug) return;

  const query = `*[_type == "countryPage" && slug.current == $slug && country == $country][0]{
    title,
    content,
    image {
      asset->{_id, url},
      alt
    }
  }`;

  client
    .fetch(query, { slug, country: countryCode.toLowerCase() })
    .then((res) => {
      console.log("Sanity fetch result:", res);
      setPage(res);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
}, [slug, countryCode]);


  if (loading) return <p>Loading...</p>;
  if (!page) return <p>No content found.please check</p>;

  return (
    <div className="country-page">
      <CountryHeader
        title={page.title}
        img={page.image ? urlFor(page.image).width(1200).url() : ""}
      />
      <div className="countryPage-content">
        <h1>{page.title}</h1>
          {/* {page.image && (
            <img
              src={urlFor(page.image).width(800).url()}
              alt={page.image.alt || page.title}
              className="country-main-img"
            />
          )} */}
        <PortableText value={page.content} />
      </div>
    </div>
  );
}

export default CountryPage;
