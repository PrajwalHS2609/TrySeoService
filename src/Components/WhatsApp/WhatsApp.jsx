import React from "react";
import "./WhatsApp.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import TSS from "./../../Img/android-chrome-512x512.png";

const WhatsApp = () => {
  // let [visible, setVisible] = useState();
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVisible(true);
  //     setTimeout(() => {
  //       setVisible(false);
  //     }, 10000); // Hide after 5 seconds
  //   }, 10000); // Show every 10 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);
  return (
    <div className="whatsAppContainer">
      {/* <div className="whatsAppContent">Hello</div> */}
      {/* <a href="https://wa.me/919742232700?text=Hello" >
        <img src={whatsApp} alt="" />
      </a> */}
      <FloatingWhatsApp
        phoneNumber="916360226773"
        accountName="TrySeoServices"
        avatar={TSS} // Optional
        statusMessage="Typically replies within 5 min" // Optional
        chatMessage="Welcome to TrySeoService! Boost your business with expert digital marketing! Call Now ~ +91 6360226773" // Optional
        placeholder="Type a message..." // Optional
      />
    </div>
  );
};

export default WhatsApp;
