import React from 'react'
import ContentPricingBasic from './ContentPricingBasic'
import ContentPricingSeo from './ContentPricingSeo'
import ContentPricingManagement from './ContentPricingManagement'

const ContentPricingMain = () => {
  return (
    <div id="homePricingMain">
      <ContentPricingBasic/>
      <ContentPricingSeo/>
      <ContentPricingManagement/>
    </div>
  )
}

export default ContentPricingMain
