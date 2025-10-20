import React from 'react'
import "./LpMedicalNavbar.css"

import logo from "./../../../../Img/TSS.png"
const LpMedicalLogo = () => {
  return (
    <div className="logoContainer">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  )
}

export default LpMedicalLogo
