// src/components/Headtxt.jsx
import React from "react";
import "./style.css";
const Headtxt = () => {
  return (
    <div className="fonty flex justify-center items-center mt-5 ">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white  relative group neonText">
        {" "}
        {/* Add neonText class */}
        AlgoWizard
      </h1>
    </div>
  );
};

export default Headtxt;
