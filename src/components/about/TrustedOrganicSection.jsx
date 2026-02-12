import React from "react";
import { FaLeaf, FaHeadset, FaShippingFast, FaLock, FaBoxOpen, FaCommentDots } from "react-icons/fa";
 
import orgTrsImg from "../../assets/images/orgTrsImg.png"

const features = [
  {
    icon: <FaLeaf />,
    title: "100% Organic food",
    desc: "100% healthy & Fresh food.",
  },
  {
    icon: <FaHeadset />,
    title: "Great Support 24/7",
    desc: "Instant access to Contact",
  },
  {
    icon: <FaCommentDots />,
    title: "Customer Feedback",
    desc: "Our happy customer",
  },
  {
    icon: <FaLock />,
    title: "100% Secure Payment",
    desc: "We ensure your money is save",
  },
  {
    icon: <FaShippingFast />,
    title: "Free Shipping",
    desc: "Free shipping with discount",
  },
  {
    icon: <FaBoxOpen />,
    title: "100% Organic Food",
    desc: "100% healthy & Fresh food.",
  },
];

const TrustedOrganicSection = () => {
  return (
    <section className="">
        <div className=" flex justify-center items-center">

          {/* Left Image */}
          <div className="w-full h-full">
            <img
              src={orgTrsImg}
              alt="Organic Farmer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="p-6 sm:p-10 lg:p-12">

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 leading-tight">
              100% Trusted <br /> Organic Food Store
            </h2>

            {/* Description */}
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>

            {/* Features Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-lg shrink-0">
                    {feature.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      {feature.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
    </section>
  );
};

export default TrustedOrganicSection;
