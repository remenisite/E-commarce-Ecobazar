import DeliverySection from "@/app/components/about/DeliverySection";
import OrganicFoodSection from "@/app/components/about/OrganicFoodSection";
import TeamSection from "@/app/components/about/TeamSection";
import TrustedOrganicSection from "@/app/components/about/TrustedOrganicSection";
import Testimonial from "@/app/components/home/Testimonial";
import VectorIcon from "@/app/components/home/VectorIcon";
import Breadcrumbs from "@/app/components/utils/Breadcrumbs";
import React from "react";
const About = () => {
  return (
    <>
      <div>
        <Breadcrumbs h2={"About"} />
          <OrganicFoodSection />
          <DeliverySection />
          <TrustedOrganicSection />
          <TeamSection />
          <Testimonial />   
          <VectorIcon />

      </div>
    </>
  );
};

export default About;
