"use client";

import Script from "next/script";

const Bg = () => {
  return (
    <div>
        <Script id="show-banner">
        {`var gradient= new Gradient()
         gradient.initGradient("#canvas")
      `}
      </Script>
      <div className="absolute top-0 left-0 w-full h-screen sm:h-[100vh] overflow-hidden bg-slate-50 -z-20">
        <canvas id="canvas" className=""></canvas>
      </div>
    </div>
  );
};

export default Bg;
