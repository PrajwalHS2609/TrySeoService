import React from "react";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideNavbar1 = location.pathname !== "";

  return (
    <div style={{ position: "sticky", top: "0", zIndex: "20", width: "100%" }}>
      {hideNavbar1 && <NavBar />}
      {children}
    </div>
  );
};

export default MainLayout;
