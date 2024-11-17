import React from 'react'
import "./LandingPage1.css"
import Lp1Header from './Lp1Header/Lp1Header'
import Lp1AboutUs from './Lp1AboutUs/Lp1AboutUs'
import Lp1Industry from './Lp1Industry/Lp1Industry'
import Lp1Navbar from './Lp1Navbar/Lp1Navbar'
import Lp1Testimonial from './Lp1Testimonial/Lp1Testimonial'
import Lp1Package from './Lp1Package/Lp1Package'
import Lp1Service from './Lp1Service/Lp1Service'
import Lp1ContactUs from './Lp1ContactUs/Lp1ContactUs'
import Lp1Footer from './Lp1Footer/Lp1Footer'
import PopUp from '../../PopUp/PopUp'
const LandingPage1 = () => {
  return (
    <div className='landingPage'>
      <Lp1Navbar/>
      <Lp1Header/>
      <Lp1AboutUs/>
      <Lp1Service/>
      <Lp1Industry/>
      <Lp1Testimonial/>
      <Lp1Package/>
      <Lp1ContactUs/>
      <PopUp/>
      <Lp1Footer/>
    </div>
  )
}

export default LandingPage1
