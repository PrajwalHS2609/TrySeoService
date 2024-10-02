import React from 'react'
import BlogHeader from '../../BlogHeader'
import ExploreHead from './ExploreHead/ExploreHead'
import ExploreSeoOptimize from './ExploreSeoOptimize/ExploreSeoOptimize'

const ExploreSEO = () => {
  return (
    <div className='homePageContainer'>
      <BlogHeader head="Explore SEO Strategies for Optimizing eCommerce Stores" txt="Blog" />
      <ExploreHead />
      <ExploreSeoOptimize/>
    </div>
  )
}

export default ExploreSEO
