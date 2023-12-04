"use client";

import React, { useEffect } from "react";
import HamburgerIcon from "@/icons/svgs/HamburguerIcon";

import { navItems } from "@/data/Header/navItems";
import { socialMediaItems } from "@/data/Header/socialMediaItems";
import { useApp } from "@/contexts/useContext";

const Header: React.FC = () => {
  const { isAboveBlackArea, setOpenMenu } = useApp();

  return (
    <header className="container mx-auto md:flex text-[#1B1A19] justify-between items-center border-b-black/20">
      <div data-aos="fade-right" className="flex items-center gap-8">
        <a
          href="/"
          className="hidden md:block uppercase font-extrabold text-[28px]"
        >
          desenvolvedor front-end
        </a>

        <div
          onClick={() => {
            setOpenMenu(true);
          }}
          className="fixed flex items-center cursor-pointer justify-center z-20 top-5 right-5 md:hidden"
        >
          <HamburgerIcon fill={isAboveBlackArea ? "#fff" : "#000"} />
        </div>
        <ul className="hidden list-none md:flex gap-8">
          {navItems.map((item) => (
            <a key={item.id} href={item.href}>
              <li className="font-semibold text-[20px]" key={item.id}>
                {item.name}
              </li>
            </a>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex gap-6 ">
        {socialMediaItems.map((item) => (
          <a target="_blank" key={item.id} href={item.href}>
            <item.icon />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
