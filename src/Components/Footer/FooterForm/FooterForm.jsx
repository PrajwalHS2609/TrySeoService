import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./FooterForm.css";
import Swal from "sweetalert2";
const FooterForm = () => {
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
    <div className="footer-form" onSubmit={onSubmit}>
      <h2>Send us a message</h2>
      <form action="" on>
        <input type="text" name="name" placeholder="Your name" required />
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          required
        />
        <input type="phone" name="phone" placeholder="+088-234-6849" required />
        <textarea
          name="message"
          placeholder="Write your message here..."
          required
        ></textarea>
        <button type="submit">
          Send Message{" "}
          <span>
            <FaArrowRight className="footer-formIco" />
          </span>
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
