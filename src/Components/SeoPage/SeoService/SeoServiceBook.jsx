import React from "react";
import "./SeoService.css";

const SeoServiceBook = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="seoServiceBook-container">
      <div className="seoServiceBook-content">
        <h3>Book an Appointment</h3>
        <p>
          Ready to elevate your business? Partner with TrySEOServices.Com and
          kickstart your journey to digital success!
        </p>
        <button class="cssbuttons-io-button" onClick={handlePopUp}>
          Book Now
          <div class="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div className="seoServiceBook-content">
        <img
          src="https://svhasvprwe7647ea2604.blob.core.windows.net/blobsvhasvprwe7647ea2604/wp-content/uploads/2023/08/booking.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SeoServiceBook;
