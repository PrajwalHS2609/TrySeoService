import React from "react";
import Swal from "sweetalert2";
import "./ContactUs.css";
const ContactUsForm = () => {
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
  return (
    <div className="contactUsForm">
      <h6>GET IN TOUCH</h6>
      <h3>Drop A Line!</h3>
      <form action="" onSubmit={onSubmit}>
        <div className="firstLayer">
          {" "}
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
            type="phone"
            placeholder="Phone number"
            required
            autoComplete="off"
            name="phone"
          />
        </div>
        <div className="secondLayer">
          <textarea
            placeholder="Your Message"
            required
            autoComplete="off"
            name="message"
          ></textarea>
        </div>
        <div className="thirdLayer">
          {" "}
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
