"use client";

import React from "react";

import { useApp } from "@/contexts/useContext";
import Link from "next/link";
import ItemCard from "@/components/ItemCard";

const FeaturedWorks: React.FC = () => {
  const { setIsAboveBlackArea } = useApp();

  const courses = [
    {
      id: 1,
      title: "Danki Code",
      description:
        "Curso de desenvolvimento web completo, com HTML, CSS, Javascript, PHP, MySQL, WordPress, React e muito mais.",
      date: "06/2023 - 09/2023",
      siteRef: "https://cursos.dankicode.com/login",
      teacher: "Guilherme Grillo",
    },
    {
      id: 2,
      title: "B7web",
      description: "Curso de desenvolvimento Web Completo - FullStack ",
      date: "06/2022 - 06/2023",
      siteRef: "https://lp.b7web.com.br/fullstack",
      teacher: "Bonieky Lacerda",
    },
    {
      id: 3,
      title: "Service Now",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
      date: "06/2023 - 09/2023",
      siteRef: "#",
    },
    {
      id: 3,
      title: "Service Now",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
      date: "06/2023 - 09/2023",
      siteRef: "#",
    },
    {
      id: 3,
      title: "Service Now",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
      date: "06/2023 - 09/2023",
      siteRef: "#",
    },
  ];

  return (
    <section id="courses" className="py-4 bg-black/95">
      <div data-aos="fade-right" className="container mx-auto">
        <div className="flex-col md:flex md:flex-row py-[70px] items-center gap-[70px]">
          <h2 className="text-white text-center text-[40px]">Courses</h2>
          <Link href="https://github.com/MarceloBxD">
            <button className="text-white mx-auto mt-5 md:mx-0 flex items-center justify-center text-[18px] border-4 rounded-md border-white px-10 py-6 w-[300px] h-[60px]">
              Ver mais no Github
            </button>
          </Link>
        </div>
        <div className="flex-col md:flex md:flex-row md:h-[20rem] w-full gap-3">
          {courses.map((item) => (
            <div
              data-aos="fade-right"
              key={item.id}
              className="flex-1 relative mt-3 hover:flex-[2]  transition-all duration-300"
            >
              <ItemCard
                key={item.id}
                title={item.title}
                description={item.description}
                siteRef={item.siteRef}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
