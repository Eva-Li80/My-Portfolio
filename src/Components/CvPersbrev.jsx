import React from "react";
import cv from "../assets/image 1.png";
import cv2 from "../assets/image 2.png";
import "./cvstyle.css";

const CvPersbrev = () => {
  return (
    <div
      style={{ background: "#214781" }}
      id="cv"
      className="w-full h-screen flex justify-center items-center pb-24"
    >
      <div className="max-w-[1000px] p-4 text-center flex flex-wrap">
        <div className="img-container" style={{ flex: "1", padding: "10px" }}>
          <img className="img" style={{ width: "80%" }} src={cv} alt="cv" />
        </div>
        <div className="img-container" style={{ flex: "1", padding: "10px" }}>
          <img className="img" style={{ width: "80%" }} src={cv2} alt="cv" />
        </div>
      </div>
    </div>
  );
};

export default CvPersbrev;
