import React from 'react'
import EmailPageHeader from './EmailPageHeader'
import EmailWhy from './EmailWhy'
import EmailComprehensive from './EmailComprehensive/EmailComprehensive'
import WebsiteClient from '../WebsitePage/WebsiteClient/WebsiteClient'
import HomeTestimonial from '../HomePage/HomeTestimonial/HomeTestimonial'
import EmailFaq from './EmailFaq/EmailFaq'

const EmailPage = () => {
  return (
    <div className='homePageContainer'>
      <EmailPageHeader/>
      <EmailWhy/>
      <EmailComprehensive/>
      <WebsiteClient/>
      <HomeTestimonial/>
      <EmailFaq/>
    </div>
  )
}

export default EmailPage
