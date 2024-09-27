import React from "react";
import "./ContactUs.css";
const ContactUsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };
  return (
    <div className="contactUsForm">
      <h6>GET IN TOUCH</h6>
      <h3>Drop A Line!</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className="firstLayer">
          {" "}
          <input type="text" placeholder="Your Name" required  autoComplete="off"/>
          <input type="email" placeholder="Email Address" required  autoComplete="off"/>
          <input type="phone" placeholder="Phone number" required  autoComplete="off"/>
        </div>
        <div className="secondLayer">
          <textarea placeholder="Your Message" required autoComplete="off"></textarea>
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
