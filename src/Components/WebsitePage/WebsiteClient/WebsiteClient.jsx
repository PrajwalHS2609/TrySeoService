import React from "react";
import WebsiteClientMain from "./WebsiteClientMain";
import "./WebsiteClient.css";
import WebsiteClientHead from "./WebsiteClientHead";
const WebsiteClient = () => {
  return (
    <div className="websiteClient">
      <WebsiteClientHead />
      <WebsiteClientMain />
    </div>
  );
};

export default WebsiteClient;
