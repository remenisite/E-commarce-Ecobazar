import React from "react";
import { FaEnvelope, FaLock } from 'react-icons/fa'; 
import Breadcrumbs from '../utils/Breadcrumbs';
import NewsletterSection from '../utils/NewsletterSection';


const SigninForm = () => {
  return (
    <>
      <Breadcrumbs h2={"Login"} />
      <div className="">
        <div className="container flex justify-center ">
          <div className="w-[520px]">
            <form>
              {/* Email Field */}
              <div className="mb-4">
                <h2 className="text-[32px] font-semibold font-main text-text text-center">Sign In</h2>
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
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <div className="flex items-center border rounded px-3 py-2">
                  <FaLock className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    className="w-full outline-none"
                    placeholder="Enter password"
                  />
                </div>
              </div>


              {/* Terms Checkbox */}
              <div className="mb-6 flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm">Remember me</label>
                <a href="/"> <label className="text-sm">Forget Password</label></a>
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
            <p className="text-center text-sm mt-4">
            Don’t have account?
              <a href="/signup" className="text-blue-500 hover:underline">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
      <NewsletterSection />
    </>
  );
};

export default SigninForm;
