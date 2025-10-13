import React from 'react'
import FranceSeoPageFaqHead from './FranceSeoPageFaqHead'
import FranceSeoPageFaqAcc from './FranceSeoPageFaqAcc'
import BlobAnim from '../../../HomePage/BlobAnim'
import homeFaq from "./../../../../Img/homePgImgs/homeFaq.jpg";

const FranceSeoPageFaq = () => {
  return (
<div className="homeFaq">
      <div className="homeFaqContent1">
        <FranceSeoPageFaqHead />
        <FranceSeoPageFaqAcc />
      </div>
      <div className="homeFaqContent2">
        <div className="homeFaqBlob">
          <BlobAnim />
        </div>
        <img src={homeFaq} alt="homeFaq" loading="lazy" />
      </div>
    </div>
  )
}

export default FranceSeoPageFaq
