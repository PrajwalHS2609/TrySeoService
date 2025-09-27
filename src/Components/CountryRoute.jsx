import React from "react";
import { useParams, Navigate } from "react-router-dom";

function CountryRoute({ allowedCountries, children }) {
  const { countryCode } = useParams();

  if (!countryCode) return <Navigate to="/" replace />;

  // Compare lowercased values
  const isAllowed = allowedCountries.some(
    (c) => c.toLowerCase() === countryCode.toLowerCase()
  );

  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default CountryRoute;
