import React from 'react'
import ImpOnPageSeoHead from './ImpOnPageSeoHead'
import ImpOnPageSeoUnderstand from './ImpOnPageSeoUnderstand'
import ImpOnPageSeoWhy from './ImpOnPageSeoWhy/ImpOnPageSeoWhy'
import ImpOnPageSeoContinuous from './ImpOnPageSeoContinuous'
import ExploreSEOHeader from '../ExploreSEO/ExploreSEOHeader'

const ImpOfPageSeo = () => {
  return (
    <div className='homePageContainer'>
      <ExploreSEOHeader head="Blog" txt="Blog" />
      <ImpOnPageSeoHead />
    <ImpOnPageSeoUnderstand/>
    <ImpOnPageSeoWhy/>
    <ImpOnPageSeoContinuous/>
  </div>
  )
}

export default ImpOfPageSeo
