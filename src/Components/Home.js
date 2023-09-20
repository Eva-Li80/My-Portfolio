import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import eva from "../assets/Eva-Li-img.jpg";

const Home = () => {
  return (
    <div id="home" className="bg-[#214781] w-full h-screen flex justify-center items-center pb-10">
      <div className="max-w-[1000px] p-4 text-center">
        <section className="text-[#f3a3c4] text-2xl">
         
          <div className="md:flex md:flex-row-reverse md:items-center">
            <div className="md:w-1/2 md:ml-4">
              <img
                width={100}
                height={200}
                style={{ border: "3px solid pink", borderRadius: "10px", marginBottom: 15 }}
                src={eva}
                alt=""
              />
            </div>
            <div className="md:w-1/2 md:mr-4">
              
            </div>
          </div>
          <h1  className="text-4xl sm:text-4xl font-light text-[#df538e] py-1">
            <span style={{fontSize: 19, color: "white" , marginRight: 10}}>Hej mitt namn är:  </span> Eva-Li Nätynki Bodén
          </h1>
          <p className="text-4xl sm:text-2xl text-[#edeff6] py-4 max-w-[700px] mx-auto">
            Jag har läst två år på yrkeshögskolan till systemutvecklare i Borås både backend och frontend.. tog examen juni 2023 och är öppen för arbete!
          </p>
          <div className="flex justify-center">
            <Link to="work">
              <button className="text-pink border-2 px-6 py-3 my-2 flex items-center hover:border-pink-600">
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
