"use client";

import React, { useEffect } from "react";
import HamburgerIcon from "@/icons/svgs/HamburguerIcon";
import { motion } from "framer-motion";

import { navItems } from "@/data/Header/navItems";
import { socialMediaItems } from "@/data/Header/socialMediaItems";
import { useApp } from "@/contexts/useContext";

const Header: React.FC = () => {
  const { isAboveBlackArea } = useApp();

  return (
    <header className="container mx-auto md:flex text-[#1B1A19] justify-between items-center border-b-black/20">
      <div className="flex items-center gap-8">
        <motion.a
          href="/"
          className="hidden md:block uppercase font-work-sans font-extrabold text-[28px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          desenvolvedor front-end
        </motion.a>

        <div className="fixed flex items-center cursor-pointer justify-center z-20 top-5 right-5 md:hidden">
          <HamburgerIcon fill={isAboveBlackArea ? "#fff" : "#000"} />
        </div>
        <ul className="hidden list-none md:flex gap-8">
          {navItems.map((item) => (
            <a key={item.id} href={item.href}>
              <motion.li
                initial={{
                  y: -20,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  delay: 0.1 * item.id,
                  duration: 0.4,
                }}
                className="font-semibold text-[20px]"
                key={item.id}
              >
                {item.name}
              </motion.li>
            </a>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex gap-6 ">
        {socialMediaItems.map((item) => (
          <motion.a
            initial={{
              transform: "rotateY(180deg)",
              opacity: 0,
            }}
            whileInView={{
              transform: "rotateY(0)",
              opacity: 1,
            }}
            exit={{
              transform: "rotateY(180deg)",
              opacity: 0,
            }}
            transition={{
              delay: 0.1 * item.id,
              duration: 0.4,
            }}
            href={item.href}
          >
            <item.icon />
          </motion.a>
        ))}
      </div>
    </header>
  );
};

export default Header;
