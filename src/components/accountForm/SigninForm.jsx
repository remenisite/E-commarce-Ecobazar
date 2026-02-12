import React from "react";
import { FaEnvelope, FaLock } from 'react-icons/fa'; 
import Breadcrumbs from '../utils/Breadcrumbs';
import Button from "../ui/Button";
import Input from "../ui/Input";



const SigninForm = () => {
  return (
    <>
      <Breadcrumbs h2={"Login"} />
      <section className="">
        <div className="container flex justify-center py-[80px]">
          <div className="w-[520px] bg-white shadow-2xl pt-[24px] pb-[32px] rounded-[8px] text-center">
                        <h2 className="text-[32px] font-medium font-main text-text mb-[20px]">Sign In</h2>
            <form className="flex flex-col gap-[12px] px-[24px]">
              <Input type="email" placeholder={'Email'} className=" placeholder:text-[16px] font-medium font-main text-[#999999]" />
              <Input type="password" placeholder={'password'} className=" placeholder:text-[16px] font-medium font-main text-[#999999]" />

<div className=" flex justify-between">

              <div className=" flex gap-[10px] items-center">
                <input id="link" type="checkbox" className=" text-[30px]" />
                <label
                  htmlFor="link"
                  className="text-center text-[14px] font-normal font-main text-[#666666]"
                  >
        Remember me
                </label>
              </div>
              <a href="/" className=" text-[14px] font-normal font-main text-[#666666]">Forget Password</a>
                  </div>
              <Button className="my-[20px]" >Login</Button>
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
