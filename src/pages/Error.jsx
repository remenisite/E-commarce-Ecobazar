import React from 'react'
import Breadcrumbs from '../components/utils/Breadcrumbs'
import NewsletterSection from '../components/utils/NewsletterSection'
import errImg from '../assets/images/errorImg.png'

const Error = () => {
  return (
    <div>
        <Breadcrumbs h2={'404 Error Page'} />
        <div className='flex justify-center py-[80px]'>
            <div className='text-center'>

            <img src={errImg} alt="errimg" />
            <h2 className='text-[40px] mt-[32px] mb-[20px] font-semibold font-main text-text'>Oops! page not found</h2>
            <h4 className='text-[16px] font-medium font-main text-[#808080] w-[612px] text-center'>Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</h4>
            </div>

        </div>
        <NewsletterSection />
    </div>
  )
}

export default Error