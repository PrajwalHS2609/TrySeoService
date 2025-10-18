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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere
          dolorem unde ducimus ut quod vel numquam quidem nam sit, officiis
          doloribus a mollitia deleniti.
        </p>
        <button onClick={handlePopUp}>Book Now</button>
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
