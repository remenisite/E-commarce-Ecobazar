import React from 'react'

import InstagramImg from "../../assets/images/InstagramImg.png"
import { Link } from 'react-router'


const Instragram = () => {
  return (
    <>


    <section className='pb-[60px]'>
        <div className="container text-center">
            <h2 className='text-[32px] font-semibold font-main text-text mb-[32px]'>Follow us on Instagram</h2>
            <div className='grid grid-cols-6'>
                <a href="/"><img src={InstagramImg} alt="InstagramImg" /></a>
                <a href="/"><img src={InstagramImg} alt="InstagramImg" /></a>
                <a href="/"><img src={InstagramImg} alt="InstagramImg" /></a>
                <a href="/"><img src={InstagramImg} alt="InstagramImg" /></a>
                <a href="/"><img src={InstagramImg} alt="InstagramImg" /></a>
                <a href="/"><img src={InstagramImg} alt="InstagramImg" /></a>
            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Instragram