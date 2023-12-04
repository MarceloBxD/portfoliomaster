"use client";

import React from "react";
import Image from "next/image";

interface WorkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  siteRef?: string | undefined;
  teacher?: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  teacher,
  siteRef,
}) => {
  return (
    <a
      href={siteRef}
      className="cursor-pointer shadow-md flex-1 shadow-stone-600 md:w-full mx-auto md:mx-0 bg-white rounded-xl flex-col md:flex mb-14 "
    >
      <div className="transition-all duration-500 ease-in-out">
        <Image
          width={600}
          height={300}
          className="transition-all w-[70%] md:border-slate-100 border-4 md:w-full mx-auto md:blur-sm blur-none hover:blur-none duration-500 ease-in-out cursor-pointer"
          src={`
            https://picsum.photos/seed/${title}/500/300
        `}
          alt={title}
        />
      </div>
    </a>
  );
};

export default WorkCard;
