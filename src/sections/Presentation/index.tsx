"use client";

import React from "react";

import Lottie from "react-lottie-player";
import lottieJson from "@/utils/lottieAnimation.json";
import { AnchorButton } from "@/components/AnchorButton";

const Presentation: React.FC = () => {
  return (
    <section
      data-aos="fade-right"
      className="flex container mx-auto flex-col mt-24 md:mt-32 md:flex-row"
    >
      <div className="flex items-center justify-center md:items-start flex-col gap-10">
        <h1 className="text-2xl text-center md:text-left md:text-4xl max-w-[70%] lg:text-6xl font-semibold">
          I&apos;m Marcelo Bracet, a Web Developer
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
          <AnchorButton title="View my courses" />
          <AnchorButton inverse title="Contact Me" />
        </div>
      </div>
      <div className="mx-auto drop-shadow-lg  my-20 md:mx-0 md:my-0">
        <Lottie
          animationData={lottieJson}
          loop={false}
          play
          style={{ width: 320, height: 320 }}
        />
      </div>
    </section>
  );
};

export default Presentation;
