"use client";

import React from "react";
import Image from "next/image";

interface WorkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  siteRef?: string | undefined;
  teacher?: string;
  img?: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  teacher,
  siteRef,
  img,
}) => {
  return (
    <a
      target="_blank"
      href={siteRef}
      className="group relative h-[370px] md:grayscale hover:grayscale-0 overflow-hidden shadow-md flex-1 shadow-stone-600 md:w-full mx-auto md:mx-0 bg-white rounded-xl flex-col md:flex mb-14"
    >
      <div className="flex items-center justify-center w-full h-full">
        <Image
          width={600}
          height={300}
          className="object-cover  transition-all duration-500 ease-in-out group-hover:scale-105"
          src={img ? img : ""}
          alt={title}
        />
      </div>
    </a>
  );
};

export default WorkCard;
