import React from "react";
import Breadcrumbs from "../components/utils/Breadcrumbs";
import NewsletterSection from "../components/utils/NewsletterSection";
import LeftSection from "../components/contact/LeftSection";
import RightSection from "../components/contact/RightSection";


const Contact = () => {
  return (
    <>
      <Breadcrumbs h2={"cntact"} />
      <div className="">
        {" "}
        <div className="container">
   <LeftSection />
   <RightSection />
        </div>
      </div>
      <NewsletterSection />
    </>
  );
};

export default Contact;
