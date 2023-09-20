import React from "react";
import { Link } from "react-scroll";
import ligtdark from "../assets/lightanddark.jpg";
import kalkylator from "../assets/kalkylator.jpeg";
import siffror from "../assets/siffror-2-20196.jpg";
import cvt from "../assets/image 1.png";
import neveralone from "../assets/alone.png";

const Work = () => {
  return (
    <div id="work" className="bg-[#0a192f] text-gray-300 w-full md:h-screen">
      <div className="max-w-[1000px] mx-auto p-4 w-full h-full">
        <div className="py-16">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Små och större projekt
          </p>
          <p className="py-2 pb-2"></p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
              Kalkulator
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
              backgroundImage: `url(${siffror})`,
              border: "2px solid gray",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {" "}
            <h3
              style={{
                marginLeft: 10,
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Siffror
            </h3>
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <Link
                  activeClass="active"
                  to="maxmin"
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
              backgroundImage: `url(${cvt})`,
              fontSize: 10,
              border: "2px solid gray",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {" "}
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
