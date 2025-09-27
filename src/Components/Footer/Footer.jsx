import React from "react";
import "./Footer.css";
import FooterBio from "./AboveFooter/FooterBio";
import FooterAddress1 from "./AboveFooter/FooterAddress";
import FooterService from "./AboveFooter/FooterService";
import FooterCopy from "./BelowFooter/FooterCopy";
import FooterSocial from "./BelowFooter/FooterSocial";
const Footer = () => {

  return (
    <div className="footerContainer">
      <div className="footerWrapper1">
        {" "}
        <FooterBio />
        <FooterAddress1
          addressHead="Address1"
          footerAddress="513, 4th C Main Rd, near Bandhan Bank, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043"
        />
        <FooterAddress1
          addressHead="Address2"
          footerAddress="Premier Rabbi Building, 6th Cross, near Royal Oak Furnitures, Chandra Reddy Layout, Koramangala, Bengaluru 560034"
        />
        <FooterService />
      </div>
      <div className="footerLine"></div>
      <div className="footerWrapper2" >
        <FooterCopy />
        <FooterSocial />
      </div>
    </div>
  );
};

export default Footer;
