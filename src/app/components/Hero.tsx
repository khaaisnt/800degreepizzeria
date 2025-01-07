import React from "react";
import Heros from "../../../public/hero.jpeg";

export default function Hero() {
  return (
    <div
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[850px] bg-cover bg-top px-[20px] sm:px-[30px] md:px-[50px] text-white"
      style={{ backgroundImage: `url(${Heros.src})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="md:text-[110px] text-[40px] font-semibold text-skinColor special-header">
          Pizza
        </h1>
        <h2 className="uppercase font-bold md:text-[110px] text-[50px] tracking-widest">
          done right
        </h2>
      </div>
    </div>
  );
}
