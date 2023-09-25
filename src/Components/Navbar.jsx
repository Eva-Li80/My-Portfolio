import React, { useState } from "react";
import EvaLi from "../assets/Untitled (7)-1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[85px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="hide-on-small-screen  gradient-bg">
        <img
          style={{
            width: 200,
            height: 70,
            marginBottom: 6,
            marginTop: 2,
            marginLeft: 0,
          }}
          src={EvaLi}
          alt="logo Eva-Li"
        />
      </div>
      <div className=" flex items-center justify-end ">
        <ul className="hidden lg:flex mover ">
          <li>
            <Link
              className="hover:border-b-2 border-transparent hover:border-pink-600"
              to="home"
              smooth={true}
              duration={500}
            >
              Start
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-transparent hover:border-pink-600"
              to="about"
              smooth={true}
              duration={500}
            >
              Om mig
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-transparent hover:border-pink-600"
              to="skills"
              smooth={true}
              duration={500}
            >
              Färdigheter
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-transparent hover:border-pink-600"
              to="work"
              smooth={true}
              duration={500}
            >
              Lite små projekt
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-2 border-transparent hover:border-pink-600"
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
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center pb-10"
        }
      >
        <li className="py-4 text-2xl  hover:bg-pink-500 hover:border-pink-400">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Start
          </Link>
        </li>
        <li className="py-4 text-2xl  hover:bg-pink-500 hover:border-pink-400">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Om mig
          </Link>
        </li>
        <li className="py-4 text-2xl  hover:bg-pink-500 hover:border-pink-400">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Färdigheter
          </Link>
        </li>
        <li className="py-4 text-2xl  hover:bg-pink-500 hover:border-pink-400">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Små och större projekt
          </Link>
        </li>
        <li className="py-4 text-2xl  hover:bg-pink-500 hover:border-pink-400 ">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
