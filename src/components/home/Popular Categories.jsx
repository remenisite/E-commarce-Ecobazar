import React from 'react'
import HotDeals from '../utils/HotDeals'
import ProductCard from './product/ProductCard'

const PopularCategories = () => {
  return (
    <section>
        <div className="container">
            <HotDeals hotH2={'PopularCategories'} />

            <div>
                <ProductCard />
            </div>
        </div>


    </section>
  )
}

export default PopularCategories