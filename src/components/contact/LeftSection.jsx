import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const LeftSection = () => {
  return (
    <>
      {/* Left Contact Info */}{" "}
      <div className="space-y-6">
   
        <div className="flex items-start gap-4">
          {" "}
          <FaMapMarkerAlt className="text-green-500 mt-1" />{" "}
          <div>
            {" "}
            <h4 className="font-semibold">Address</h4>{" "}
            <p>2715 Ash Dr. San Jose, South Dakota 83475</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex items-start gap-4">
          {" "}
          <FaEnvelope className="text-green-500 mt-1" />{" "}
          <div>
            {" "}
            <h4 className="font-semibold">Email</h4> <p>Proxy@gmail.com</p>{" "}
            <p>Help.proxy@gmail.com</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex items-start gap-4">
          {" "}
          <FaPhoneAlt className="text-green-500 mt-1" />{" "}
          <div>
            {" "}
            <h4 className="font-semibold">Phone</h4> <p>(219) 556-0114</p>{" "}
            <p>(964) 333-0487</p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default LeftSection;
