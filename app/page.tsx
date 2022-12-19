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
            <h1 className="text-[3rem] sm:text-7xl  text-slate-200 font-['ClashDisplay']">
              Hartaj <span>&nbsp; Writes</span>
            </h1>{" "}
          </div>
        </div>
        <div className="bg-[#0e2640] px-3 w-full flex flex-col justify-center items-center text-slate-400 font-bold leading-[3.3rem] sm:leading-[4.2rem] md:leading-[5.2rem] lg:leading-[6.2rem] xl:leading-[7.2rem] font-['Unbounded'] tracking-tight  text-3xl  xl:text-[5.5rem] sm:text-[3.7rem] lg:text-[4.7rem]  h-[55vh] sm:h-[90vh]">
          <div className="w-full mx-1 sm:mx-0 sm:w-[80vw]">
         Hartaj Writes , blog by <span className="text-slate-200"> Hartaj Singh</span> </div>
          <div className="w-full mx-1 sm:mx-0 sm:w-[80vw]" > <span className="text-slate-200">  Straight Forward </span> and Simple
         <span className="text-slate-300"> articles</span>  </div> 
            <div className="w-full mx-1 sm:mx-0 sm:w-[80vw] "> on <span className="text-slate-200"> Web Development</span> and <span className="text-slate-200"> Computer Science</span>
          </div>
          

        </div>
      </div>
    </>
  );
};

export default Home;
