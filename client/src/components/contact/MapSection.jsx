
import React from "react";

const MapSection = () => {
  return (
    <div className=" mt-[64px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14594.388468386296!2d90.4068457!3d23.868435999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c416ec497185%3A0x628e52943c152c40!2sZam%20Zam%20Tower!5e0!3m2!1sen!2sbd!4v1765349295288!5m2!1sen!2sbd"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapSection;