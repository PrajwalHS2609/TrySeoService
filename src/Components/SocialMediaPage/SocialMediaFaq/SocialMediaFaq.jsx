import React from 'react'
import HomeFaqHead from '../../HomePage/HomeFaq/HomeFaqHead'
import BlobAnim from '../../HomePage/BlobAnim'
import SocialMediaFaqAcc from './SocialMediaFaqAcc'
import homeFaq from "./../../../Img/homePgImgs/homeFaq.jpg"

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
          src={homeFaq}
          alt="homeFaq"
          loading="lazy"
        />
    </div>
  </div>
  )
}

export default SocialMediaFaq
