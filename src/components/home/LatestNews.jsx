import React from 'react'
import FoodSlider from '../Latest News/FoodSlider'

const LatestNews = () => {
  return (
    <section className='pb-[60px]'>
      <div className="container text-center">

        <h2 className='text-[32px] font-semibold font-main text-text mb-[32px]'>Latest News</h2>

        <div className='grid grid-cols-3 gap-[24px]'>

          <FoodSlider />
          <FoodSlider />
          <FoodSlider />

        </div>


      </div>
    </section>
  )
}

export default LatestNews