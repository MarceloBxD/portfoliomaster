import React from "react";

import { navItems } from "@/data/Header/navItems";
import { socialMediaItems } from "@/data/Header/socialMediaItems";

const Header: React.FC = () => {
  return (
    <header className="hidden md:flex text-[#1B1A19] justify-between items-center border-b-black/20">
      <div className="flex items-center gap-8">
        <a
          href="/"
          className="uppercase font-work-sans font-extrabold text-[28px]"
        >
          desenvolvedor front-end
        </a>

        <ul className="list-none flex gap-8">
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
          <a href={item.href}>
            <item.icon />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
