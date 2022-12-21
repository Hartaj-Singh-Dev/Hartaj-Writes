import React from "react";
import Image from "next/image";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className=" w-full sm:w-[80vw] flex flex-col justify-center items-center h-screen sm:h-[90vh] ">
          <div className="">
            <Image src="/Elantepic.jpg" className="rounded-[50%] h-44 w-44 sm:h-64 sm:w-64" height={350} width={350} alt="" loading="eager" />
          </div>
          <div className="mt-[2rem]">
            {" "}
            <h1 className="text-[3rem] sm:text-7xl  text-slate-200 font-clashDisplay">
              Hartaj <span>&nbsp; Writes</span>
            </h1>{" "}
          </div>
        </div>
        <div className="bg-[#0d233b] px-3 w-full flex flex-col justify-center items-center text-slate-400 font-bold leading-[3.4rem] sm:leading-[4.2rem] md:leading-[5.2rem] lg:leading-[6.2rem] xl:leading-[7.4rem] font-['Unbounded'] tracking-tight  text-3xl  xl:text-[5.2rem] sm:text-[3.7rem] lg:text-[4.7rem]  h-[55vh] sm:h-screen">
          <div className="w-full mx-1 sm:mx-0 sm:w-[80vw]">
         Hartaj Writes , blog by <span className="text-slate-200"> Hartaj Singh</span> </div>
          <div className="w-full mx-1 sm:mx-0 sm:w-[80vw]" > <span className="text-slate-200 underline decoration-[#F9AA5E] decoration-4 md:decoration-8 underline-offset-4">  Straight Forward </span> and Simple
         <span className="text-slate-300"> articles</span>  </div> 
            <div className="w-full mx-1 sm:mx-0 sm:w-[80vw] "> on <span className="text-slate-200 underline decoration-[#F9AA5E] decoration-4 md:decoration-8 underline-offset-4 "> Web Development</span> and <span className="text-slate-200"> Computer Science</span>
          </div>
          

        </div>
     <Blogs/> 
      </div>
    </>
  );
};

export default Home;
