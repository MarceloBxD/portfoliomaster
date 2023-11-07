"use client";

import React from "react";

import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import lottieJson from "@/utils/lottieAnimation.json";

const Presentation: React.FC = () => {
  return (
    <section className="flex container mx-auto flex-col mt-24 md:mt-32 md:flex-row">
      <div className="flex items-center md:items-start flex-col gap-10">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-4xl max-w-[70%] lg:text-6xl font-semibold"
        >
          I'm Marcelo Bracet, a Web Developer
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex gap-4"
        >
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            href="#featuredWorks"
            className="bg-black w-[224px] h-[60px] font-semibold rounded-md py-4 px-10 text-center font-work-sans text-white"
          >
            View My Work
          </motion.a>
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="rounded-md w-[224px] h-[60px] border border-solid border-black font-semibold py-4 px-10 "
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
      <div className="mx-auto drop-shadow-lg  my-24 md:mx-0 md:my-0">
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
