"use client";

import React from "react";

import Link from "next/link";
import ItemCard from "@/components/ItemCard";
import { AnchorButton } from "@/components/AnchorButton";

const FeaturedWorks: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "Danki Code",
      description:
        "Curso de desenvolvimento web completo, com HTML, CSS, Javascript, PHP, MySQL, WordPress, React e muito mais.",
      date: "06/2023 - 09/2023",
      siteRef: "https://cursos.dankicode.com/login",
      teacher: "Guilherme Grillo",
      img: "https://yt3.googleusercontent.com/ytc/AGIKgqNuiibt1stK9ZTRVOTOvaDiiTqw4GdYuqx5P5jIuQ=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 2,
      title: "B7web",
      description: "Curso de desenvolvimento Web Completo - FullStack ",
      date: "06/2022 - 06/2023",
      siteRef: "https://lp.b7web.com.br/fullstack",
      teacher: "Bonieky Lacerda",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4E8d8YaU2PRglh-AO3I5d2DkKZagQgmN3_w&usqp=CAU",
    },
    {
      id: 3,
      title: "Service Now",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
      date: "06/2023 - 09/2023",
      img: "data:image/png;base64,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",
      siteRef:
        "https://www.servicenow.com/lpdem/demonow-all.html?campid=128036&cid=p:all:dg:b:rmkt:exa:GOOG_AMS_ALBU_RLSA_Brand_EXA_BrandTeamTextAd:ams:all&s_kwcid=AL!11692!3!672064551553!e!!g!!service%20now&ds_c=GOOG_LATAM_All_EN_DEMANDGEN_ALBU_RLSA_Brand_EXA_Top-Res&cmcid=71700000113926913&ds_ag=ServiceNow_EXA&cmpid=58700008524799914&ds_kids=p77758685107&gclid=CjwKCAiAjrarBhAWEiwA2qWdCOQG2yJsh-AjoPgcqMhixBsTHIW4RTBKwq-w6ffWUuqWrgusJwqXXBoCL2QQAvD_BwE&gclsrc=aw.ds",
    },
    {
      id: 4,
      title: "Udemy - Python 3 do Zero ao Avançado",
      description: "Curso de Python 3 do Zero ao Avançado",
      teacher: "Luiz Otávio Miranda",
      date: "06/2023 - 09/2023",
      siteRef: "https://www.udemy.com/course/python-3-do-zero-ao-avancado/",
      img: "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Emblem.png",
    },
  ];

  return (
    <section id="courses" className="py-4 mt-12 bg-[#0D0D0D]">
      <div data-aos="fade-right" className="container mx-auto">
        <div className="flex-col md:flex md:flex-row py-[70px] items-center gap-[70px]">
          <h2 className="text-white text-center text-[40px]">Cursos</h2>
          <div
            className="
           justify-center flex mt-5 md:flex"
          >
            <AnchorButton
              href="https://github.com/marcelobxd"
              title="Ver mais no Github"
            />
          </div>
        </div>
        <div className="flex-col md:flex md:flex-row md:h-[20rem] w-full gap-3">
          {courses.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-[80%] h-[350px] mx-auto"
            >
              <ItemCard
                key={item.id}
                title={item.title}
                description={item.description}
                siteRef={item.siteRef}
                teacher={item.teacher}
                img={item.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
