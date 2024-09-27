import React from 'react'
import HomeFaqHead from '../../HomePage/HomeFaq/HomeFaqHead'
import BlobAnim from '../../HomePage/BlobAnim'
import SocialMediaFaqAcc from './SocialMediaFaqAcc'

const SocialMediaFaq = () => {
  return (
    <div className="homeFaq">
    <div className="homeFaqContent1">
      <HomeFaqHead />
      <SocialMediaFaqAcc />
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

export default SocialMediaFaq
