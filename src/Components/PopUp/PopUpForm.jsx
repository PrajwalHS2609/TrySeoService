import React from "react";
import Swal from "sweetalert2";
import "./PopUp.css";
const PopUpForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);

    formData.append("access_key", "7a49c951-139a-412a-b3a5-6d69beb45d96");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
      });
      form.reset(); // Clear the form after successful submission
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again later.",
        icon: "error",
      });
    }
  };
  let handleExit = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "none";
  };
  return (
    <div className="overlay">
      <div className="form-container">
        <button className="close-btn" onClick={handleExit}>
          ✕
        </button>

        <h2>Send Us a Message</h2>
        <p className="subtitle">
          We'd love to hear from you! Fill out the form below and we'll get in
          touch soon.
        </p>

        <form onSubmit={onSubmit}>
          <div className="input-layer">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              autoComplete="off"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              required
              autoComplete="off"
            />
          </div>

          <div className="second-layer">
            <textarea
              placeholder="Your Message"
              name="message"
              required
              autoComplete="off"
            ></textarea>
          </div>

          <div className="third-layer">
            <button className="frutiger-button" id="formButtonPop">
              <div className="inner">
                <span className="text">Book Appointment</span>
              </div>
            </button>{" "}
          </div>

          <div className="privacy">
            <label>
              <input
                type="checkbox"
                name="consent"
                id="check"
                required
                checked
              />
              I give my consent to TrySEOServices.Com's Digital Marketing team
              to reach out to me with updates and notifications through Email,
              SMS, WhatsApp, and Voice Calls, in accordance with their Privacy
              Policy. This authorization supersedes any registration under
              DNC/NDNC guidelines.
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUpForm;
