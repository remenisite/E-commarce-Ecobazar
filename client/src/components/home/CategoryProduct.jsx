import React from 'react'
import HotDeals from '../utils/HotDeals'
import ProductCategory from '../product/ProductCategory'

const CategoryProduct = () => {
  return (
    <section>
        <div className="container">
            <HotDeals hotH2={'Popular Categories'} />

            <div className='grid grid-cols-6 gap-[24px]'>
                <ProductCategory />
                <ProductCategory />
                <ProductCategory />
                <ProductCategory />
                <ProductCategory />
                <ProductCategory />
                <ProductCategory />
                <ProductCategory />
                <ProductCategory />
                <ProductCategory />
                <ProductCategory />
                <ProductCategory />
            </div>



        </div>
    

    
    </section>
  )
}

export default CategoryProduct