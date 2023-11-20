import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import eva from "../assets/img.eva.jpg";
import "./stylemob.css";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-gradient-to-r from-[#fff] via-[#edebe7] to-[#79b8a4] w-full h-screen flex justify-center items-center pb-1"
    >
      <div className="max-w-[1000px] p-4 text-center">
        <section className="text-[#1b5844] text-2xl">
          <div className="md:flex md:items-center">
            <div
              className=" md:w-1/4 md:ml-6"
              style={{
                width: 165,
                height: 165,
                marginRight: 50,  
                marginBottom: 20,
                overflow: "hidden",
                border: "5px solid #8fa199",
                borderRadius: "5px",
                boxShadow: "10px 10px 10px rgba(0.5, 0.5, 0.5, 1)",
              }}
            >
              <img
                className="eva"
                src={eva}
                alt=""
              />
            </div>
            <div className="md:w-1/2 md:mr-10">
              <h1 className=" evatext text-4xl sm:text-4xl font-light text-[#3c3c3c] py-1">
                Eva-Li Nätynki Bodén
              </h1>
              <p style={{ fontSize: 15 }}>
                "projekt är under uppbyggnad..men välkommen att kika
                runt(❁´◡`❁)"
              </p>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-[#202020] py-4 max-w-[700px] mx-auto">
            Jag är utbildad systemutvecklare, tog examen juni 2023. Läser just
            nu vidare frontendutveckling då jag tycker det är väldigt intressant
            och roligt, men jag är öppen för arbete!
          </p>
          <div className="flex justify-center">
            <Link to="work">
              <button className=" homebutton text-[#616161] border-2 px-6 py-3 my-2 flex items-center hover:border-[#d36d81] ">
                Små och större projekt <HiArrowNarrowRight />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
