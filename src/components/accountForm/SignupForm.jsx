import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa'; 
import Breadcrumbs from '../utils/Breadcrumbs';
import NewsletterSection from '../utils/NewsletterSection';

const SignupForm = () => {
  return (
    <>
      <Breadcrumbs h2={"Create Account"} />
    <div className="">
      <div className="container flex justify-center ">
        

<div className='w-[520px]'>
  
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                className="w-full outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                className="w-full outline-none"
                placeholder="Enter password"
              />
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                className="w-full outline-none"
                placeholder="Confirm password"
              />
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="mb-6 flex items-center">
            <input id='link' type="checkbox" className="mr-2 text-[30px]" />
            <label htmlFor='link' className="text-center text-[14px] font-normal font-main text-[#666666]">Accept all terms & Conditions</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Create Account
          </button>
        </form>

   
            {/* Login Link */}
            <p className="text-center text-[14px] font-normal font-main text-[#666666]">
            Already have account
              <a href="/signin" className="text-[16px] font-medium font-main text-text">
                Login
              </a>
            </p>
</div>

      </div>
    </div>
    <NewsletterSection />
    </>

  );
};

export default SignupForm;
