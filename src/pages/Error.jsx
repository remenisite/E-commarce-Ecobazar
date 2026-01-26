import React from 'react'
import Breadcrumbs from '../components/utils/Breadcrumbs'
import NewsletterSection from '../components/utils/NewsletterSection'
import errImg from '../assets/images/errorImg.png'

const Error = () => {
  return (
    <div>
        <Breadcrumbs h2={'404 Error Page'} />
        <div>
            <img src={errImg} alt="errimg" />
            <h2 className='text-[40ox] font-semibold font-main text-text'>Oops! page not found</h2>

        </div>
        <NewsletterSection />
    </div>
  )
}

export default Error