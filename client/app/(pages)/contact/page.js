import LeftSection from "@/app/components/contact/LeftSection";
import MapSection from "@/app/components/contact/MapSection";
import RightSection from "@/app/components/contact/RightSection";
import Breadcrumbs from "@/app/components/utils/Breadcrumbs";
import React from "react";


const Contact = () => {
  return (
    <>
      <Breadcrumbs h2={"contact"} />

        <div className="container py-[80px]">
   <LeftSection />
   <RightSection />
        </div>

<MapSection />
    </>
  );
};

export default Contact;
