// import React from 'react'

// import InstagramImg from "../../assets/images/InstagramImg.png"
// import { Link } from 'react-router'
// import { FaInstagram } from 'react-icons/fa'

// const Instragram = () => {
//   return (
//     <>
//     <section className='pb-[60px]'>
//         <div className="container text-center">
//             <h2 className='text-[32px] font-semibold font-main text-text mb-[32px]'>Follow us on Instagram</h2>
//             <div className='grid grid-cols-6 relative group'>
//                 <a href="/"><img src={InstagramImg} alt="InstagramImg" /></a>
//                 <a href="/"><img src={InstagramImg} alt="InstagramImg" /></a>
//                 <a href="/"><img src={InstagramImg} alt="InstagramImg" /></a>
//                 <a href="/"><img src={InstagramImg} alt="InstagramImg" /></a>
//                 <a href="/"><img src={InstagramImg} alt="InstagramImg" /></a>
//                 <a href="/"><img src={InstagramImg} alt="InstagramImg" /></a>

//                 <Link className=' absolute opacity-0 group-hover:opacity-100 transition duration-300' to={'/'} ><FaInstagram size={22} /></Link>

//             </div>
                      
//         </div>
//     </section>
    
    
    
//     </>
//   )
// }

// export default Instragram


import React from "react";
import InstagramImg from "../../assets/images/InstagramImg.png";
import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";

const Instragram = () => {
  return (
    <section className="pb-[60px]">
      <div className="container text-center">
        <h2 className="text-[32px] font-semibold font-main text-text mb-[32px]">
          Follow us on Instagram
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, index) => (
            <Link
              to="/"
              key={index}
              className="relative group overflow-hidden rounded-[12px]"
            >
              {/* Image */}
              <img
                src={InstagramImg}
                alt="Instagram"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}

                <Link to={'/'} className="absolute inset-0 bg-[#2b572ecc] text-white z-999 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center" >
                <FaInstagram  size={28} />  </Link>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instragram;
