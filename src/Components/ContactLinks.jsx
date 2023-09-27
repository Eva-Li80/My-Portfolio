import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContactLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <a
        href="mailto: evaliboden@gmail.com"
        className="text-gray-900 hover:text-pink-500 hover:bg-transparent bg-transparent transition-colors duration-300"
      >
        <HiOutlineMail size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/eva-li-n%C3%A4tynki-bod%C3%A9n-4a3b1021b/"
        className="text-gray-900 hover:text-blue-500 hover:bg-transparent bg-transparent transition-colors duration-300"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://www.facebook.com/evali.boden"
        className="text-gray-900 hover:text-sky-500 hover:bg-transparent bg-transparent transition-colors duration-300"
      >
        <FaFacebook size={20} />
      </a>
      <a
        href="https://github.com/Eva-Li80"
        className="text-gray-900 hover:text-gray-500 hover:bg-transparent bg-transparent transition-colors duration-300"
      >
        <FaGithub size={20} />
      </a>
    </div>
  );
};

export default ContactLinks;
