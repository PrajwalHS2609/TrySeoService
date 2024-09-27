import React from "react";
import TSS from "./../../../Img/TSS.png";
import { Link } from "react-router-dom";
const FooterBio = () => {
  return (
    <div className="footerBio">
      <div className="footerBioImg">
        <a href="https://tryseoservices.com/">
          {" "}
          <img src={TSS} alt="" />
        </a>
      </div>
      <p>
        TrySeoService Digital Marketing Agency Theme Is fully responsible, Build
        whatever you like with the TrySeoService, TrySeoService is the creative,
        modern WordPress Theme suitable for Your Business Marketing.
      </p>
      <Link to={"/"}>
        {" "}
        <button>Contact Us Now</button>
      </Link>
    </div>
  );
};

export default FooterBio;
