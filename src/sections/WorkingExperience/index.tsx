"use client";

import React, { useState } from "react";

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
    <section data-aos="fade-right" className="text-center">
      <div className="container flex flex-col  gap-5 mx-auto">
        <h2 className=" tracking-wider font-section-title text-section-title">
          Working Experience
        </h2>
        <div className="flex flex-col gap-4 w-fit">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActive(project.id)}
              className="hover:border-l-4 font-semibold hover:border-main-blue text-left py-1 px-6 cursor-pointer uppercase  "
            >
              <h3 key={project.id} className="text-xl">
                {project.title}
              </h3>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>

        <button className="bg-black text-white w-[200px] mx-auto py-2 px-3 mt-10 rounded-md">
          Mais informações
        </button>
      </div>
    </section>
  );
};

export default WorkingExperience;
