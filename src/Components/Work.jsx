import React from "react";
import { Link } from "react-scroll";
import ligtdark from "../assets/lightanddark.jpg";
import kalkylator from "../assets/kalkylator.jpeg";
import neveralone from "../assets/alone.png";
import "./stylemob.css";

const Work = () => {
  return (
    <div
      id="work"
      className=" work bg-gradient-to-r from-[#79b8a4] via-[#edebe7] to-[#fff] text-gray-1600 w-full md:h-screen"
    >
      <div className="max-w-[1000px] mx-auto p-4 w-full h-full">
        <div className="py-16">
          <p className="projekt text-4xl font-bold inline border-b-2  text-[#eeeae2] border-[#d36d81]">
            Projekt
          </p>
          <p className="py-0 pb-0"></p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div
            style={{
              backgroundImage: `url(${neveralone})`,
              border: "2px solid gray",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <h3 style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
              Never alone
            </h3>
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Eva-Li80/Never-alone.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Till projektet på git hub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "lightpink",
              border: "2px solid gray",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <h3 style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
              play hangman
            </h3>
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://eva-li-hangman.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Till projektet
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "lightblue",
              border: "2px solid gray",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <h3 style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
              Family blog
            </h3>
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://blog-family.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Till projektet
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${ligtdark})`,
              border: "2px solid gray",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <h3 style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
              Ljus/mörkt tema
            </h3>
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <Link
                  activeClass="active"
                  to="weather"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Till projekt
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${kalkylator})`,
              border: "2px solid gray",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <h3
              style={{
                marginLeft: 10,
                color: "blue",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Små test projekt
            </h3>
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <Link
                  activeClass="active"
                  to="kalkylator"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Till projekt
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 10,
              border: "2px solid gray",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <h3
              style={{
                marginLeft: 10,
                fontSize: 30,
                background: "#214781",
                padding: 20,
                border: 3,
                borderRadius: 3,
              }}
            >
              Mitt CV
            </h3>
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <Link
                  activeClass="active"
                  to="cv"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Till projekt
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
