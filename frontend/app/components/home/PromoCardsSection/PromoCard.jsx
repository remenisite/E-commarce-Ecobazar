import React from 'react'
import SaleOfMonthCard from './SaleOfMonthCard'
import LowFatMeatSection from './LowFatMeatSection'
import FreshFruitCard from './FreshFruitSection'

const PromoCard = () => {
  return (
    <div className='container grid grid-cols-3 gap-[24px] pb-[60px]'>

        <SaleOfMonthCard />
        <LowFatMeatSection />
        <FreshFruitCard />

    </div>
  )
}

export default PromoCard