import React from 'react'
import "./ExploreImg.css"
const ExploreImg = (props) => {
  return (
    <div className='exploreImg'>
      <img src={props.img} alt={props.alt} loading='lazy'/>
    </div>
  )
}

export default ExploreImg
