"use client";

import React from "react";
import { motion } from "framer-motion";

const Feedbacks: React.FC = () => {
  return (
    <section id="feedbacks" className="w-full mt-[2rem]">
      <div className="container mx-auto py-[118px]">
        <div className="flex text-center justify-center items-center flex-col gap-2">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="font-eczar font-semibold text-[40px] tracking-wider"
          >
            Some Generous Words
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-work-sans text-[20px] text-[#594F43]"
          >
            Some of my favorite testimonials from my clients
          </motion.p>
        </div>
        <div>{/* words */}</div>
      </div>
    </section>
  );
};

export default Feedbacks;
