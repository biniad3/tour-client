import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 animate-fade-in-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Company Name */}
        <div className="text-center md:text-left mb-4 md:mb-0 ml-10">
          <h2 className="text-2xl font-bold tracking-wide">Erta Ale</h2>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Erta Ale. All rights reserved.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 lg:mr-10 md:mr-10 ">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>

      {/* Animation */}
      <div className="mt-6 text-center">
        <p className="text-gray-500 animate-pulse">
          "Empowering connections, one step at a time."
        </p>
      </div>
    </footer>
  );
};

export default Footer;
