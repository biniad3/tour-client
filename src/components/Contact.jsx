import React from "react";

const Contact = () => {
  return (
    <div className="p-6 md:p-28 pt-24 " id="Contact">
      <h1 className="text-3xl md:text-5xl font-semibold text-center mb-5">
        If you need, Just drop us a line
      </h1>
      <h3 className="font-bold text-gray-600 text-center mb-10">
        Who are in extremely love with eco-friendly system.
      </h3>

      <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen p-6 md:p-8 animate-fade-in">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-500 mb-6 md:mb-0">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="messageType"
            >
              Message Type
            </label>
            <select
              id="messageType"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            >
              <option value="feedback">Feedback</option>
              <option value="support">Support</option>
              <option value="inquiry">Inquiry</option>
            </select>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-500">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              rows="8"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg transform hover:translate-y-1 transition-transform duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
