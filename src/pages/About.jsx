import React from "react";
import Breadcrumbs from "../components/utils/Breadcrumbs";
import OrganicFoodSection from "../components/about/OrganicFoodSection";

import DeliverySection from "../components/about/DeliverySection";

const About = () => {
  return (
    <>
      <section>
        <Breadcrumbs h2={"About"} />
        <div className="container">
          <OrganicFoodSection />
          <DeliverySection />
        </div>
      </section>
    </>
  );
};

export default About;
