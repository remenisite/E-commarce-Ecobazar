import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Breadcrumbs from "../utils/Breadcrumbs";
import NewsletterSection from "../utils/NewsletterSection";
import Input from "../ui/Input";
import Button from "../ui/Button";

const SignupForm = () => {
  return (
    <>
      <Breadcrumbs h2={"Create Account"} />
      <div className="">
        <div className="container flex justify-center py-[80px]  ">
          <div className="w-[520px] bg-white shadow-2xl pt-[24px] pb-[32px] rounded-[8px] text-center">
            <h2 className="text-[32px] font-medium font-main text-text mb-[20px]">Create Account</h2>
            <form className="flex flex-col gap-[12px] px-[24px]">
              <Input type="email" placeholder={'Email'} className=" placeholder:text-[16px] font-medium font-main text-[#999999]" />
              <Input type="password" placeholder={'password'} className=" placeholder:text-[16px] font-medium font-main text-[#999999]" />
              <Input type="password" placeholder={'Confirm password'} className=" placeholder:text-[16px] font-medium font-main text-[#999999]" />

              <div className=" flex gap-[10px] items-center">
                <input id="link" type="checkbox" className=" text-[30px]" />
                <label
                  htmlFor="link"
                  className="text-center text-[14px] font-normal font-main text-[#666666]"
                >
                  Accept all terms & Conditions
                </label>
              </div>
              <Button className="my-[20px]" >Create Account</Button>
            </form>

            {/* Login Link */}
            <p className="text-center text-[14px] font-normal font-main text-[#666666]">
              Already have account
              <a
                href="/signin"
                className="text-[16px] font-medium font-main text-text"
              >
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
