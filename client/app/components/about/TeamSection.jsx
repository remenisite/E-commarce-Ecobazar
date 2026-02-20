import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

const teamData = [
  {
    name: "Jenny Wilson",
    role: "Ceo & Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Jane Cooper",
    role: "Worker",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    name: "Cody Fisher",
    role: "Security Guard",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Robert Fox",
    role: "Senior Farmer Manager",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
  },
];

const TeamSection = () => {
  return (
    <section className="">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[48px] font-semibold font-main text-text">
          Our Awesome Team
        </h2>
        <p className="text-[16px] font-normal font-main text-[#666666] text-center mt-[12px] mb-[50px]">
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus <br /> neque. Duis non diam eget est luctus tincidunt
          a a mi.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-white w-[312px] h-[368px] rounded-[10px] shadow-sm overflow-hidden group"
            >
              {/* Image Section */}
              <div className="relative">
                <Image
                  src={`${member.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={member.name}
                  width={350}
                  height={288}
                  className="w-full h-72 object-cover"
                />

                {/* Overlay Icons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                  <div className="flex gap-3">
                    <Link
                      href={"/"}
                      className=" p-3 rounded-full text-white hover:bg-green-500 hover:text-white transition cursor-pointer"
                    >
                      {" "}
                      <FaFacebookF size={22} />
                    </Link>
                    <Link
                      href={"/"}
                      className=" p-3 rounded-full text-white hover:bg-green-500 hover:text-white transition cursor-pointer"
                    >
                      {" "}
                      <FaTwitter size={22} />
                    </Link>
                    <Link
                      href={"/"}
                      className=" p-3 rounded-full text-white hover:bg-green-500 hover:text-white transition cursor-pointer"
                    >
                      {" "}
                      <FaPinterestP size={22} />
                    </Link>
                    <Link
                      href={"/"}
                      className=" p-3 rounded-full text-white hover:bg-green-500 hover:text-white transition cursor-pointer"
                    >
                      {" "}
                      <FaInstagram size={22} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-left px-[20px] pt-[16px]">
                <h3 className="text-[18px] font-medium font-main text-text">
                  {member.name}
                </h3>
                <p className="text-[14px] font-normal font-main text-[#808080]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
