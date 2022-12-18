import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className=" w-full sm:w-[80vw] flex flex-col justify-center items-center h-[75vh] sm:h-[90vh] ">
          <div className="">
            <img src="/Elantepic.jpg" className="rounded-[50%] h-40 w-40 sm:h-60 sm:w-60"  alt="" loading="eager" />
          </div>
          <div className="mt-[2rem]">
            {" "}
            <h1 className="text-[3rem] sm:text-7xl  text-white font-['ClashDisplay']">
              Hartaj <span>&nbsp; Writes</span>
            </h1>{" "}
          </div>
        </div>
        <div className="bg-[#153250] w-full flex flex-col justify-center items-center text-white font-bold leading-['1'] font-['Unbounded'] text-[2rem]  h-[50vh] sm:h-[60vh]">
          <div className="w-full">
         Hartaj Writes , blog by Hartaj Singh </div> <div className="" > Straight Forward and Simple
            articles </div> <div> on Web Development and Computer Science
          </div>
          

        </div>
      </div>
    </>
  );
};

export default Home;
