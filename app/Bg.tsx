"use client";

import Script from "next/script";

const Bg = () => {
  return (
    <>
        <Script id="show-banner">
        {`var gradient= new Gradient()
         gradient.initGradient("#canvas")
      `}
      </Script>
      <div className="absolute top-0 left-0 w-full h-[60vh] sm:h-[90vh] overflow-hidden bg-slate-50 -z-20">
        <canvas id="canvas" className=""></canvas>
      </div>
    </>
  );
};

export default Bg;
