import React from 'react'
import GoogleAdsPricingCampaign from './GoogleAdsPricingCampaign'
import GoogleAdsPricingCity from './GoogleAdsPricingCity'
import GoogleAdsPricingNational from './GoogleAdsPricingNational'

const GoogleAdsPricingMain = () => {
  return (
    <div id="homePricingMain">
      <GoogleAdsPricingCampaign/>
      <GoogleAdsPricingCity/>
      <GoogleAdsPricingNational/>
    </div>
  )
}

export default GoogleAdsPricingMain
