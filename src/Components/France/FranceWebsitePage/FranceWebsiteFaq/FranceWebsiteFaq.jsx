import React from 'react'
import FranceWebsiteFaqHead from './FranceWebsiteFaqHead'
import BlobAnim from '../../../HomePage/BlobAnim'
import homeFaq from "./../../../../Img/homePgImgs/homeFaq.jpg";
import FranceWebsiteFaqAcc from './FranceWebsiteFaqAcc';

const FranceWebsiteFaq = () => {
  return (
    <div className="homeFaq">
      <div className="homeFaqContent1">
        <FranceWebsiteFaqHead />
        <FranceWebsiteFaqAcc />
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

export default FranceWebsiteFaq
