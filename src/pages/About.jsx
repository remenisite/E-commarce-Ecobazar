import React from "react";
import Breadcrumbs from "../components/utils/Breadcrumbs";
import OrganicFoodSection from "../components/about/OrganicFoodSection";

import DeliverySection from "../components/about/DeliverySection";
import Testimonial from "../components/home/Testimonial";
import VectorIcon from "../components/home/VectorIcon";
import TrustedOrganicSection from "../components/about/TrustedOrganicSection";
import TeamSection from "../components/about/TeamSection";

const About = () => {
  return (
    <>
      <section>
        <Breadcrumbs h2={"About"} />

          <OrganicFoodSection />
          <DeliverySection />
          <TrustedOrganicSection />
          <TeamSection />
          <Testimonial />   
          <VectorIcon />


      </section>
    </>
  );
};

export default About;
