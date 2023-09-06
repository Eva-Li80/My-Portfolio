import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  
  return (
    <div id="home" className="bg-[#214781] w-full h-screen flex justify-center items-center pb-10 ">
      <div className="max-w-[1000px] p-4 text-center">
        <section className="text-[#f3a3c4] text-2xl">
          Hej, mitt namn är{" "}
          <h1 className="text-4xl sm:text-4xl font-bold text-[#df538e] py-2 mb-5">
            Eva-Li Nätynki Bodén
          </h1>
          <h4 className="text-4xl sm:text-4xl font-bold text-[#edeff6]">
            Jag är systemutvecklare
          </h4>
          <p className="text-4xl sm:text-3xl text-[#edeff6] py-4 max-w-[700px] mx-auto">
            Jag har läst två år på yrkeshögskolan i Borås både backend och frontend.. tog examen juni 2023 och är öppen för arbete!
          </p>
          <div className="flex justify-center">
           <Link to="work">
            <button  className="text-pink border-2 px-6 py-3 my-2 flex items-center hover:border-pink-600">
              Lite små projekt <HiArrowNarrowRight />
            </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
