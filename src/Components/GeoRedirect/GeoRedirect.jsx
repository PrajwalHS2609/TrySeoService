// src/Components/GeoRedirect/GeoRedirect.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function GeoRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        const countryCode = response.data.country;

        if (countryCode === "IN") {
          navigate("/in", { replace: true });
        } else if (countryCode === "US") {
          navigate("/us", { replace: true });
        } else {
          navigate("/", { replace: true }); // default fallback
        }
      } catch (err) {
        console.error("Geo lookup failed", err);
        navigate("/in", { replace: true }); // fallback
      }
    };

    fetchCountry();
  }, [navigate]);

  return <p>Detecting your location...</p>;
}

export default GeoRedirect;
