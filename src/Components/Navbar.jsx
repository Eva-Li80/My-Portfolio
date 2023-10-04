import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import ContactLinks from "./ContactLinks";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[85px] flex justify-end items-center px-4 bg-gradient-to-r from-[#19785a] via-[#eeeae2] to-[#fff] text-black text-2xl">
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
              Projekt
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
        <li className="py-2 text-2xl hover:border-b-2 border-transparent hover:border-[#943d4e]">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Start
          </Link>
        </li>

        <li className="py-4 text-2xl  hover:border-b-2 border-transparent hover:border-[#943d4e]">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Om mig
          </Link>
        </li>
        <li className="py-4 text-2xl  hover:border-b-2 border-transparent hover:border-[#943d4e]">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Färdigheter
          </Link>
        </li>
        <li className="py-4 text-2xl  hover:border-b-2 border-transparent hover:border-[#943d4e]">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projekt
          </Link>
        </li>
        <li className="py-4 text-2xl  hover:border-b-2 border-transparent hover:border-[#943d4e]">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Kontakt
          </Link>
        </li>
        <h3
          style={{
            marginTop: 30,
            marginBottom: 10,
            textDecoration: "underline",
          }}
        >
          Besök gärna👇
        </h3>
        <li className="py-4 text-2xl ">
          <ContactLinks />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
