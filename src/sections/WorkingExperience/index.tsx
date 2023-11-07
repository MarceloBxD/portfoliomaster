"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const WorkingExperience: React.FC = () => {
  const [active, setActive] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Faro Beach Club",
      description:
        "Desenvolvimento de um site para um clube de praia em Faro, Portugal.",
    },
    {
      id: 2,
      title: "CBL Consultoria",
      description:
        "Desenvolvimento de um site para uma empresa de consultoria.",
    },
    {
      id: 3,
      title: "Projeto Python",
      description: "Desenvolvimento de um projeto em Python para um cliente.",
    },
  ];

  return (
    <section className="text-center">
      <div className="container flex flex-col  gap-5 mx-auto">
        <motion.h2
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -100,
          }}
          transition={{
            duration: 1,
          }}
          className="font-work-sans tracking-wider font-section-title text-section-title"
        >
          Working Experience
        </motion.h2>
        <div className="flex flex-col gap-4 w-fit">
          {projects.map((project) => (
            <motion.div
              onClick={() => setActive(project.id)}
              initial={{
                x: -100,
                opacity: 0,
                color: "#000",
              }}
              whileInView={{
                color: active === project.id ? "#000" : "#999",
                x: 0,
                opacity: 1,
              }}
              exit={{
                color: "#000",
                x: -100,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="hover:border-l-4 font-semibold hover:border-main-blue text-left py-1 px-6 cursor-pointer uppercase  "
            >
              <motion.h3 key={project.id} className="text-xl">
                {project.title}
              </motion.h3>
              <motion.p className="text-sm">{project.description}</motion.p>
            </motion.div>
          ))}
        </div>
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          className="bg-black text-white w-[200px] mx-auto py-2 px-3 mt-10 rounded-md"
        >
          More info
        </motion.button>
      </div>
    </section>
  );
};

export default WorkingExperience;
