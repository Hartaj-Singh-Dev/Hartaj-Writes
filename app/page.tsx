import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className=" w-full sm:w-[80vw] flex flex-col justify-center items-center sm:h-[90vh] ">
          <div>
            <Image
              src={"/Elantepic.jpg"}
              width={345}
              height={345}
              alt="hartaj's pic"
              className="rounded-[50%]"
            />
          </div>
          <div className="mt-[2rem]">
            {" "}
            <h1 className="text-[6.4rem] sm:text-7xl  text-white font-['ClashDisplay']">
              Hartaj <span>&nbsp; Writes</span>
            </h1>{" "}
          </div>
        </div>
        <div className="bg-[#153250] w-full flex flex-col justify-center items-center text-white font-bold leading-['1'] font-['Unbounded'] text-[3.8rem]  h-[50vh] sm:h-[60vh]">
          <div className="sm:w-[80vw] w-full">
         Hartaj Writes , blog by Hartaj Singh </div> <div > Straight Forward and Simple
            articles </div> <span> on Web Development and Computer Science
          </span>
          

        </div>
      </div>
    </>
  );
};

export default Home;
