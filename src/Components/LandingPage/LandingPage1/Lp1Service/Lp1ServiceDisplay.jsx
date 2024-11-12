import React from 'react'
import "./Lp1Service.css"
import { Outlet } from 'react-router-dom'
const Lp1ServiceDisplay = () => {
  return (
    <div className='lp1ServiceDisplay'>
      <Outlet/>
    </div>
  )
}

export default Lp1ServiceDisplay
