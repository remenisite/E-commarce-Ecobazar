import React from "react";
import { FaEnvelope, FaLock } from 'react-icons/fa'; 
import Breadcrumbs from '../utils/Breadcrumbs';



const SigninForm = () => {
  return (
    <>
      <Breadcrumbs h2={"Login"} />
      <section className="">
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
              <div className="mb-6 flex justify-between items-center">
                <div>

                <input id="link" type="checkbox" className="mr-2" />
                <label htmlFor="link" className="text-[14px] font-normal font-main text-[#666666]">Remember me</label>
                </div>
                <a href="/"> <label className="text-[14px] font-normal font-main text-[#666666]">Forget Password</label></a>
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
            Don’t have account?
              <a href="/signup" className="text-[16px] font-medium font-main text-text">
                Register
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninForm;
