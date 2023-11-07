"use client";

import React from "react";
import WorkCard from "@/components/WorkCard";
import { motion } from "framer-motion";

import { useApp } from "@/contexts/useContext";

const FeaturedWorks: React.FC = () => {
  const { setIsAboveBlackArea } = useApp();

  const works = [
    {
      id: 1,
      title: "Work 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
      cta: <button>View Github</button>,
    },
    {
      id: 2,
      title: "Work 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
      cta: <button>View Github</button>,
    },
    {
      id: 3,
      title: "Work 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
      cta: <button>View Github</button>,
    },
    {
      id: 4,
      title: "Work 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
      cta: <button>View Github</button>,
    },
  ];

  React.useEffect(() => {
    const elementToObserve = document.getElementById("featuredWorks");

    // se o elemento estiver acima da área preta, seta o estado para true
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAboveBlackArea(false);
        } else {
          setIsAboveBlackArea(true);
        }
      });
    });

    // observa o elemento
    if (elementToObserve) observer.observe(elementToObserve);

    // para de observar o elemento
    return () => {
      if (elementToObserve) observer.unobserve(elementToObserve);
    };
  }, [setIsAboveBlackArea]);

  return (
    <section id="featuredWorks" className="py-4 bg-black/95">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex-col  md:flex md:flex-row py-[70px] items-center gap-[69px]"
        >
          <h2 className="text-white text-center font-eczar text-[40px]">
            Featured Works
          </h2>
          <button className="text-white mx-auto md:mx-0 flex items-center justify-center font-work-sans text-[20px] border-4 rounded-md border-white px-10 py-6 w-[300px] h-[60px]">
            View more on Linkedin
          </button>
        </motion.div>
        <div className="flex-col md:flex md:flex-row md:h-[20rem] w-full gap-3">
          {works.map((item) => (
            <motion.div className="flex-1 relative hover:flex-[2] overflow-hidden transition-all duration-300">
              <WorkCard
                key={item.id}
                title={item.title}
                description={item.description}
                cta={item.cta}
              />
              <div className="bg-gradient-to-t z-50 absolute"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
