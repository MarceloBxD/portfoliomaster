"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
interface WorkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  cta: React.ReactNode | React.ReactNode[];
  work: string;
  githubRef?: string | undefined;
  siteRef?: string | undefined;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  cta,
  work,
  githubRef,
  siteRef,
}) => {
  return (
    <motion.div
      // animação de entrada
      initial={{
        opacity: 0,
        x: -100,
      }}
      // animação de saída
      exit={{
        opacity: 0,
        x: -100,
      }}
      // animação de quando estiver na tela
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="w-[80%] cursor-pointer shadow-md flex-1 shadow-stone-600 md:w-full mx-auto md:mx-0 bg-white rounded-xl flex-col md:flex mb-14 "
    >
      <div>
        <Image
          width={600}
          height={300}
          className="transition-all duration-500 ease-in-out cursor-pointer"
          src={`
            https://picsum.photos/seed/${title}/500/300
        `}
          alt={title}
        />
        {Array.isArray(cta) ? (
          <>
            <Link href={githubRef ? githubRef : ""}>
              <button className="absolute top-0 right-0 bg-main-blue text-white font-semibold text-sm px-4 py-2 rounded-bl-xl">
                {cta[0]}
              </button>
            </Link>
            <Link href={siteRef ? siteRef : ""}>
              <button className="absolute top-0 left-0 bg-main-blue text-white font-semibold text-sm px-4 py-2 rounded-bl-xl">
                {cta[1]}
              </button>
            </Link>
          </>
        ) : (
          <button className="absolute top-0 bg-main-blue text-white font-semibold text-sm px-4 py-2 rounded-bl-xl rounded-br-xl">
            {cta}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default WorkCard;
