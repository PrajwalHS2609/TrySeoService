import React from 'react'
import GoogleAdsFaqAcc from './GoogleAdsFaqAcc'
import HomeFaqHead from '../../HomePage/HomeFaq/HomeFaqHead'
import BlobAnim from '../../HomePage/BlobAnim'

const GoogleAdsFaq = () => {
  return (
    <div className="homeFaq">
    <div className="homeFaqContent1">
      <HomeFaqHead />
      <GoogleAdsFaqAcc />
    </div>
    <div className="homeFaqContent2">
      <div className="homeFaqBlob">
        <BlobAnim />
      </div>
      <img
        src="https://seoland.themeht.com/wp-content/uploads/2024/04/03-2.jpg"
        alt=""
        loading='lazy'
      />
    </div>
  </div>
  )
}

export default GoogleAdsFaq
