import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-gradient-to-r from-[#19785a] via-[#eeeae2] to-[#fff] text-gray-1600 py-6 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mt-8">
      <h2 className="text-center mb-2 md:mb-0">Visit me on:</h2>
      <div className="flex flex-wrap justify-center md:justify-start md:flex-row md:space-x-4 ">
        <div className="w-[100px] h-[30px] flex justify-between items-center bg-pink-500 shadow-md shadow-[#040c16] hover:scale-110 duration-500 mb-2">
          <a
            className="flex justify-between w-full text-gray-300 p-2"
            href="mailto: evaliboden@gmail.com"
          >
            Email <HiOutlineMail size={20} />
          </a>
        </div>
        <div className="w-[100px] h-[30px] flex justify-between items-center bg-blue-500 shadow-md shadow-[#040c16] hover:scale-110 duration-500 mb-2">
          <a
            className="flex justify-between w-full text-gray-300 p-2"
            href="https://www.linkedin.com/in/eva-li-n%C3%A4tynki-bod%C3%A9n-4a3b1021b/"
          >
            LinkedIn <FaLinkedin size={20} />
          </a>
        </div>
        <div className="w-[100px] h-[30px] flex justify-between items-center bg-sky-500 shadow-md shadow-[#040c16] hover:scale-110 duration-500 mb-2">
          <a
            className="flex justify-between w-full text-gray-300 p-2"
            href="https://www.facebook.com/evali.boden"
          >
            FaceBook <FaFacebook size={20} />
          </a>
        </div>
        <div className="w-[100px] h-[30px] flex justify-between items-center bg-gray-500 shadow-md shadow-[#040c16] hover:scale-110 duration-500 mb-2">
          <a
            className="flex justify-between w-full text-gray-300 p-2"
            href="https://github.com/Eva-Li80"
          >
            Github <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
