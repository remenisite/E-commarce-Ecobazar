import React from "react";

import orImg from '../../assets/images/orgaImg.png'


const OrganicFoodSection = () => {
  return (
    <div className="container flex items-center justify-between gap-[58px]">

      <div>
        <h2 className="text-[56px] font-semibold font-main text-text">
          100% Trusted <br /> Organic Food Store
        </h2>

        <p className="text-[18px] font-normal font-main text-[#666666] mt-[32px] w-[600px]">
          Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
          laoreet id tempor ac, cursus vitae eros. Cras quis ultricies elit.
          Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a
          eros non massa vulputate ornare. Vivamus ornare commodo ante, at
          commodo felis congue vitae.
        </p>
      </div>

      <div className="w-[794px]">
        <img
          src={orImg}          alt="Organic Farmer"
          className=""
        />
      </div>
    </div>
  );
};

export default OrganicFoodSection;
