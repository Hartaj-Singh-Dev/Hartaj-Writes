import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className=" w-full sm:w-[80vw] flex flex-col justify-center items-center h-screen sm:h-[90vh] ">
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
        <div className="bg-[#153250] px-2 w-full flex flex-col justify-center items-center text-white font-bold leading-[3.2rem] sm:leading-[4.2rem] md:leading-[5.2rem] lg:leading-[6.2rem] xl:leading-[7.2rem] font-['Unbounded'] tracking-tight  text-3xl  xl:text-[5.5rem] sm:text-[3.7rem] lg:text-[4.7rem]  h-[55vh] sm:h-[90vh]">
          <div className="w-full mx-1 sm:mx-0 sm:w-[80vw]">
         Hartaj Writes , blog by Hartaj Singh </div>
          <div className="w-full mx-1 sm:mx-0 sm:w-[80vw]" > Straight Forward and Simple
            articles </div> 
            <div className="w-full mx-1 sm:mx-0 sm:w-[80vw]"> on Web Development and Computer Science
          </div>
          

        </div>
      </div>
    </>
  );
};

export default Home;
