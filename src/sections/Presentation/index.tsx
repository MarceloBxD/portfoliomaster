"use client";

import React from "react";

import Lottie from "react-lottie-player";
import lottieJson from "@/utils/lottieAnimation.json";
import { AnchorButton } from "@/components/AnchorButton";
import { TypeAnimation } from "react-type-animation";

const Presentation: React.FC = () => {
  return (
    <section
      data-aos="fade-right"
      className="flex container justify-between mx-auto flex-col mt-24 md:mt-32 md:flex-row"
    >
      <div className="flex  items-center mx-auto text-center my-4 md:text-left md:mx-0 justify-center md:items-start flex-col gap-10">
        {/* <h1 className="text-2xl text-center md:text-left md:text-4xl max-w-[70%] lg:text-6xl font-semibold">
          I&apos;m Marcelo Bracet, a Web Developer
        </h1> */}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Olá, Seja Bem-vindo(a)!",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Sou o Marcelo Bracet, um Desenvolvedor Web Front End ",
            1000,
            "Atualmente buscando novos desafios profissionais",
            1000,
            "E buscando me tornar um Desenvolvedor Full Stack",
            1000,
          ]}
          wrapper="h1"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <div className="flex flex-col md:flex-row gap-4">
          <AnchorButton href="#courses" title="View my courses" />
          <AnchorButton href="#contact" inverse title="Contact Me" />
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
