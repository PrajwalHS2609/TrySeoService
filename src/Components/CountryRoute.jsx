import React from "react";
import { useParams, Navigate } from "react-router-dom";

function CountryRoute({ allowedCountries, children }) {
  const { countryCode } = useParams();
  const normalizedCode = countryCode?.toUpperCase(); // normalize

  // If current country is NOT allowed, redirect to home or fallback
  if (!allowedCountries.includes(normalizedCode)) {
    return <Navigate to="/" replace />; // or `/${normalizedCode || ""}`
  }

  return children;
}

export default CountryRoute;
