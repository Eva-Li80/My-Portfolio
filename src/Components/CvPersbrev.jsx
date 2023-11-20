import React from "react";
import "./cvstyle.css";
import cveva from "../Components/CV/eva-li-CV.pdf"

const CvPersbrev = () => {
  return (
    <div 
      id="cv"
      className="cvt w-full h-screen flex justify-center items-center pb-16 bg-gradient-to-r from-[#cccbef] via-[#edebe7]  to-[white] text-[#131313]"
    >
      <a className="cv" href={cveva}>Eva-Lis CV</a>
    </div>
  );
};

export default CvPersbrev;
