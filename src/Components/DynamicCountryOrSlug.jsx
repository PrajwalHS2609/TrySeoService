import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import client from './../client';
import CountryPage from './CountryPage/CountryPage';
import SlugPage from './SlugPage/SlugPage';

export default function DynamicCountryOrSlug() {
  const { countryCode, slug } = useParams();
  const [isCountryPage, setIsCountryPage] = useState(null);

  useEffect(() => {
    if (!countryCode || !slug) return;

    // Check if it's a countryPage
    client
      .fetch(
        `*[_type == "countryPage" && slug.current == $slug && country match $country][0]{_id}`,
        { slug, country: countryCode }
      )
      .then((res) => {
        setIsCountryPage(!!res);
      })
      .catch(() => setIsCountryPage(false));
  }, [countryCode, slug]);

  if (isCountryPage === null) return <p>Loading...</p>;
  return isCountryPage ? <CountryPage /> : <SlugPage />;
}
