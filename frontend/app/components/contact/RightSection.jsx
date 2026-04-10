import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

const RightSection = () => {
  return (
    <>

      <div className="w-full bg-white shadow-xl">
  
  <div className="py-[50px] px-[50px]">

        <h2 className="text-[26px] font-semibold font-main text-text">Just Say Hello!</h2>
        <p className="text-[14px] font-normal font-main mt-[8px] mb-[24px] text-[#808080]">Do you fancy saying hi to me or you want to get started with your <br /> project and you need my help? Feel free to contact me.  </p>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-[16px]">

          <Input type="text" size="md" placeholder="Template Cookie" />
          <Input placeholder="zakirsoft@gmail.com" />
          </div>
          <Input placeholder="Hello|" className="" />
          <textarea  placeholder="Subjects" className="w-full border"></textarea>
          <Button >Send Message</Button>

        </form>
  </div>
      </div>
    </>
  );
};

export default RightSection;
