import React from 'react'
import "./HomeAboutUs.css"
import checked from "./../../../Img/checked.png"
const HomeAboutUsCard = (props) => {
  return (
    <div className='homeAboutUsCard'>
      <img src={checked} alt="" />
      <h5>{props.txt}</h5>
    </div>
  )
}

export default HomeAboutUsCard
