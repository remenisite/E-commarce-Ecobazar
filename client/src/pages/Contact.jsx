import React from "react";
import Breadcrumbs from "../components/utils/Breadcrumbs";
import LeftSection from "../components/contact/LeftSection";
import RightSection from "../components/contact/RightSection";
import MapSection from "../components/contact/MapSection";


const Contact = () => {
  return (
    <>
      <Breadcrumbs h2={"cntact"} />

        <div className="container py-[80px]">
   <LeftSection />
   <RightSection />
        </div>

<MapSection />
    </>
  );
};

export default Contact;
