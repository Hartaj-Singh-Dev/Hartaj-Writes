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
              width={340}
              height={340}
              alt="hartaj's pic"
              className="rounded-[50%]"
            />
          </div>
          <div className="mt-[1rem]">
            {" "}
            <h1 className="text-[6rem] sm:text-7xl  text-white font-['ClashDisplay']">
              Hartaj <span>&nbsp; Writes</span>
            </h1>{" "}
          </div>
        </div>
        <div className="bg-[#153250] w-full  h-[50vh] sm:h-[60vh]">
          <p>
            Hartaj Writes , blog by Hartaj Singh Straight Forward and Simple
            articles on Web Development and Computer Science
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
