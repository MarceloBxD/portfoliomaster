"use client";

import React from "react";

const Feedbacks: React.FC = () => {
  return (
    <section data-aos="fade-right" id="feedbacks" className="w-full mt-[2rem]">
      <div className="container mx-auto py-[118px]">
        <div className="flex text-center justify-center items-center flex-col gap-2">
          <h2 className="font-semibold text-[40px] tracking-wider">
            Palavras Generosas
          </h2>
          <p className="text-[20px] text-[#594F43]">
            Some of my favorite testimonials from my clients
          </p>
        </div>
        <div>{/* words */}</div>
      </div>
    </section>
  );
};

export default Feedbacks;
