import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

const RightSection = () => {
  return (
    <>

      <div>
  
        <h2 className="text-2xl font-semibold mb-2">Just Say Hello!</h2>
        <p className="text-gray-600 mb-6">
Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
        </p>
        <form className="space-y-4">
          <Input type="text" size="md" placeholder="Template Cookie" />
          <Input placeholder="Template Cookie" />
          <Input placeholder="Template Cookie" />
          <Input placeholder="Template Cookie" />
          <Button >Send Message</Button>

        </form>
      </div>
    </>
  );
};

export default RightSection;
