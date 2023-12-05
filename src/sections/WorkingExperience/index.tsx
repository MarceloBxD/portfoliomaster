"use client";

import React, { useState } from "react";

const WorkingExperience: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);

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
      title: "Majors Solutions",
      description: "Agência criada para desenvolvimento de sites e apps",
    },
  ];

  return (
    <section data-aos="fade-right" className="text-center">
      <div className="container flex flex-col  gap-5 mx-auto">
        <h2 className="mt-12 tracking-wider font-section-title text-section-title">
          Experiência de Trabalho
        </h2>
        <div className="flex flex-col gap-4 w-fit mt-4">
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
        <div>
          {active && (
            <button
              onClick={() => setActive(null)}
              className="bg-main-blue mx-auto my-4 text-white py-2 px-6 rounded-md uppercase"
            >
              Fechar Visualização
            </button>
          )}
          {active === 1 && (
            <div className="w-full h-[500px]" style={{ overflow: "hidden" }}>
              <iframe
                className=" w-full h-[500px]"
                src="https://www.farobeachclub.com.br"
              ></iframe>
            </div>
          )}
          {active === 2 && (
            <iframe
              className=" w-full h-[500px]"
              src="https://www.cblconsultoria.com.br"
            ></iframe>
          )}
          {active === 3 && (
            <iframe
              className=" w-full h-[500px]"
              src="https://www.majorssolutions.com.br"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkingExperience;
