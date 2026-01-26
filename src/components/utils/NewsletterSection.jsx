import React from 'react';
import {FaFacebookF,FaTwitter,FaPinterestP,FaInstagram,} from 'react-icons/fa';

const NewsletterSection = () => {
  return (
    <div className="bg-[#E6E6E6] py-[40px]">
      <div className="container flex justify-between items-center">
        {/* Left Content */}
        <div className="">
          <h2 className="text-[24px] font-semibold font-main text-text">Subscribe our Newsletter</h2>
          <p className="text-[14px] font-normal font-main text-[#999999] w-[448px]">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>
        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col gap-4">
    <form className="flex justify-between  items-center bg-white rounded-[46px] border-[#E6E6E6] rounded overflow-hidden">
          <input type="email" placeholder="Your email address" className="w-full px-[24px] text-[16px] font-normal font-main placeholder:text-[#808080] border-none outline-none" />
          <button type="submit" className="text-[16px] font-semibold font-main text-white bg-green hover:bg-green-500 rounded-[43px] py-[16px] px-[40px]" >
            Subscribe
          </button>
        </form>
        </div>
          {/* Social Icons */}
          <div className="flex">
            <a href="/" className='w-[40px] h-[40px] hover:bg-green hover:text-white rounded-full flex items-center justify-center'><FaFacebookF className="  text-[24px] cursor-pointer" /></a>
            <a href="/" className='w-[40px] h-[40px] hover:bg-green hover:text-white rounded-full flex items-center justify-center'><FaTwitter className="  text-[24px] cursor-pointer" /></a>
            <a href="/" className='w-[40px] h-[40px] hover:bg-green hover:text-white rounded-full flex items-center justify-center'><FaPinterestP className="  text-[24px] cursor-pointer" /></a>
            <a href="/" className='w-[40px] h-[40px] hover:bg-green hover:text-white rounded-full flex items-center justify-center'><FaInstagram className="  text-[24px] cursor-pointer" /></a>
           
          </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
