"use client";

import React from "react";

import Lottie from "react-lottie-player";
import lottieJson from "@/utils/lottieAnimation.json";

const Presentation: React.FC = () => {
  return (
    <section className="flex flex-col mt-32 md:flex-row">
      <div className="flex items-center md:items-start  flex-col gap-10">
        <h1 className="text-xl md:text-4xl max-w-[70%] lg:text-6xl font-semibold">
          I'm Marcelo Bracet, a Web Developer
        </h1>
        <div className="flex  gap-4">
          <button className="bg-black w-[224px] h-[60px] font-semibold rounded-md py-4 px-10 text-center font-work-sans text-white">
            View My Work
          </button>
          <button className="rounded-md w-[224px] h-[60px] border border-solid border-black font-semibold py-4 px-10 ">
            Contact Me
          </button>
        </div>
      </div>
      <div className="mx-auto my-24 md:mx-0 md:my-0">
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 320, height: 320 }}
        />
      </div>
    </section>
  );
};

export default Presentation;
