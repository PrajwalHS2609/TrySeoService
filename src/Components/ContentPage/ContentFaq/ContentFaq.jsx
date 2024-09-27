import React from 'react'
import ContentFaqAcc from './ContentFaqAcc'
import HomeFaqHead from '../../HomePage/HomeFaq/HomeFaqHead'
import BlobAnim from '../../HomePage/BlobAnim'

const ContentFaq = () => {
  return (
    <div className="homeFaq">
    <div className="homeFaqContent1">
      <HomeFaqHead />
      <ContentFaqAcc />
    </div>
    <div className="homeFaqContent2">
      <div className="homeFaqBlob">
        <BlobAnim />
      </div>
      <img
        src="https://seoland.themeht.com/wp-content/uploads/2024/04/03-2.jpg"
        alt=""
      />
    </div>
  </div>
  )
}

export default ContentFaq
