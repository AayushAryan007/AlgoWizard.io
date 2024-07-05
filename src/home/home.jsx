import React from "react";
import Fire from "../fireflies";
import Headt from "./headtxt";
import Cards from "./cards"; // Corrected import path
import "./style.css";

const Home = () => {
  return (
    <div className="home-container relative">
      <div className="z-0 fixed top-0 left-0 w-full h-screen overflow-hidden">
        <Fire /> {/* Render Fireflies canvas here */}
      </div>

      {/* <div className=" flex flex-row">
        <div className="content absolute inset-0 flex items-center justify-center top-10">
          <Headt />
        </div>
        <div className=" absolute">
          {" "}
          <Cards />
        </div>
      </div> */}
      <div className=" content absolute inset-0 m-8">
        <Headt />
        <div className="mt-5 overflow-y-auto max-h-[80vh] custom-scrollbar">
          <div className="p-4 shadow-md rounded-lg">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
