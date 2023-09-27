import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import ContactLinks from "./ContactLinks";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[85px] flex justify-end items-center px-4 bg-gradient-to-r from-[#19785a] via-[#eeeae2] to-[#fff] text-black">
      <div className=" flex items-center justify-end ">
        <ul className="hidden lg:flex mover ">
          <li>
            <Link
              className="hover:border-b-2 border-transparent hover:border-[#943d4e]"
              to="home"
              smooth={true}
              duration={500}
            >
              Start
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-transparent hover:border-[#943d4e]"
              to="about"
              smooth={true}
              duration={500}
            >
              Om mig
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-transparent hover:border-[#943d4e]"
              to="skills"
              smooth={true}
              duration={500}
            >
              Färdigheter
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-transparent hover:border-[#943d4e]"
              to="work"
              smooth={true}
              duration={500}
            >
              Lite små projekt
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-transparent hover:border-[#943d4e]"
              to="contact"
              smooth={true}
              duration={500}
            >
              Kontakt
            </Link>
          </li>
        </ul>
       
      </div>

      <div onClick={handleClick} className="lg:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#eeeae2] flex flex-col justify-center items-center pb-10"
        }
      >
        <li className="py-4 text-2xl  hover:bg-[#d36d81]">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Start
          </Link>
        </li>
        <li className="py-4 text-2xl  hover:bg-[#d36d81]">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Om mig
          </Link>
        </li>
        <li className="py-4 text-2xl  hover:bg-[#d36d81]">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Färdigheter
          </Link>
        </li>
        <li className="py-4 text-2xl  hover:bg-[#d36d81]">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Små och större projekt
          </Link>
        </li>
        <li className="py-4 text-2xl  hover:bg-[#d36d81] ">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Kontakt
          </Link>
        </li>
        <li className="py-4 text-2xl ">
          <ContactLinks/>
        </li>
           
      </ul>
    </div>
  );
};

export default Navbar;
