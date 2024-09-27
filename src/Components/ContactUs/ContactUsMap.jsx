import React from "react";
import "./ContactUs.css"
const ContactUsMap = () => {
  return (
    <div className="contactUsMap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497564.0006042255!2d77.640749!3d13.021737000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176bdd443f25%3A0xb406c88371b54109!2sTrySEOServices.Com!5e0!3m2!1sen!2sus!4v1726924215941!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  );
};

export default ContactUsMap;
