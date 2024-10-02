import React from 'react'
import BlogHeader from '../../BlogHeader'
import ImpOnPageSeoHead from './ImpOnPageSeoHead'
import ImpOnPageSeoUnderstand from './ImpOnPageSeoUnderstand'
import ImpOnPageSeoWhy from './ImpOnPageSeoWhy/ImpOnPageSeoWhy'
import ImpOnPageSeoContinuous from './ImpOnPageSeoContinuous'

const ImpOfPageSeo = () => {
  return (
    <div className='homePageContainer'>
    <BlogHeader head="Explore SEO Strategies for Optimizing eCommerce Stores" txt="Blog" />
    <ImpOnPageSeoHead />
    <ImpOnPageSeoUnderstand/>
    <ImpOnPageSeoWhy/>
    <ImpOnPageSeoContinuous/>
  </div>
  )
}

export default ImpOfPageSeo
