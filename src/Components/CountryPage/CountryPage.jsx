// src/Components/CountryPage/CountryPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import client from "../../client";

function CountryPage() {
  const { countryCode, slug } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    const query = `*[_type == "countryPage" && slug.current == $slug && country == $country][0]{
      title,
      content
    }`;

    client
      .fetch(query, { slug, country: countryCode.toUpperCase() })
      .then(setPage)
      .catch(console.error);
  }, [slug, countryCode]);

  if (!page) return <p>Loading...</p>;

  return (
    <div className="country-page">
      <h1>{page.title}</h1>
      <PortableText value={page.content} />
    </div>
  );
}

export default CountryPage;
