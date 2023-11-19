import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import cSharp from "../assets/png-transparent-c-sharp-c-net.png";
import react from "../assets/png-transparent-react.png";
import reactnative from "../assets/react-native.png";
import vue from "../assets/Vue.js_Logo_2.svg.png";
import sql from "../assets/sql-database.png";
import mongodb from "../assets/mongodb-atlas-hits-amazon.png";
import net from "../assets/net.png";
import "./stylemob.css"

const Skills = () => {
  return (
    <div id="skills" className=" skills fix w-full h-screen bg-gradient-to-r from-[#79b8a4] via-[#edebe7] to-[#fff] text-gray-1600">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py-2">
          <p className= "erfarenhet text-4xl font-bold inline border-b-2  text-[#3c3c3c]  border-[#d36d81] ">
            Erfarenheter
          </p>
          <p className=" skillsp py-2 text-2xl">
            Dessa tekniker är vad vad jag har erefarenhet av:
          </p>
        </div>
        <div className="  w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-4">
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className=" w-20 mx-auto" src={html} alt="html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="css icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={javascript}
              alt="Javascript icon"
            />
            <p className="my-4">Javascript & Typescript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="react icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={reactnative}
              alt="reactnative icon"
            />
            <p className="my-4">React Native</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={vue} alt="vue icon" />
            <p className="my-4">Vue</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={cSharp} alt="c# icon" />
            <p className="my-4">C#</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={sql} alt="sql icon" />
            <p className="my-4">SQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mongodb} alt="mongodb icon" />
            <p className="my-4">Mongo db</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={net} alt="net icon" />
            <p className="my-4">.NET & .NET core</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Skills;
