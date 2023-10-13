import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import eva from "../assets/Eva-Li-img.jpg";
import "./stylemob.css"

const Home = () => {
  return (
    <div
      id="home"
      className="bg-gradient-to-r from-[#fbfaf9] via-[#eeeae2] to-[#6ea392] w-full h-screen flex justify-center items-center pb-1"
    >
      <div className="max-w-[1000px] p-4 text-center">
        <section className="text-[#1b5844] text-2xl">
          <div className="md:flex md:items-center">
            <div className="md:w-1/4 md:ml-6">
              <img
              className="eva"
                width={110}
                height={200}
                style={{
                  border: "3px solid #6ea392",
                  borderRadius: "5px",
                  marginBottom: 10,
                  padding: 10,
                }}
                src={eva}
                alt=""
              />
            </div>
            <div className="md:w-1/2 md:mr-10">
              <h1 className=" evatext text-4xl sm:text-4xl font-light text-[#c4304e] py-1">
                Eva-Li Nätynki Bodén
              </h1>
                <p style={{fontSize: 15}}>"Sidan är inte klar, jobbar på den eftervart😊 just nu ligger det enkla små test projekt i den under tiden.."</p>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-[#202020] py-4 max-w-[700px] mx-auto">
            Jag är utbildad systemutvecklare, tog examen juni 2023. 
            Läser just nu vidare frontendutveckling då jag tycker det är väldigt intressant och roligt, men jag är öppen för arbete!
          </p>
          <div className="flex justify-center">
            <Link to="work">
              <button className=" homebutton text-[#c4304e] border-2 px-6 py-3 my-2 flex items-center hover:border-green-800">
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
