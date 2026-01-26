import React from "react";

const RightSection = () => {
  return (
    <>
      {/* Right Contact Form */}{" "}
      <div>
        {" "}
        <h2 className="text-2xl font-semibold mb-2">Just Say Hello!</h2>{" "}
        <p className="text-gray-600 mb-6">
          {" "}
          Reach out to us for help or to start a project. We’d love to hear from
          you.{" "}
        </p>{" "}
        <form className="space-y-4">
          {" "}
          <input
            type="text"
            placeholder="Template Cookie"
            className="w-full border px-4 py-2 rounded outline-none"
          />{" "}
          <input
            type="email"
            placeholder="zakirsoft@gmail.com"
            className="w-full border px-4 py-2 rounded outline-none"
          />{" "}
          <textarea
            rows="3"
            placeholder="Hello!"
            className="w-full border px-4 py-2 rounded outline-none resize-none"
          />{" "}
          <input
            type="text"
            placeholder="Subject"
            className="w-full border px-4 py-2 rounded outline-none"
          />{" "}
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
          >
            {" "}
            Send Message{" "}
          </button>{" "}
        </form>{" "}
      </div>
    </>
  );
};

export default RightSection;
