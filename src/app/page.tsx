"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import FeaturedWorks from "@/sections/FeaturedWorks";
import Header from "@/sections/Header";
import Presentation from "@/sections/Presentation";

import { useApp } from "@/contexts/useContext";
import CloseIcon from "@/icons/svgs/CloseIcon";
import { navItems } from "@/data/Header/navItems";
import { socialMediaItems } from "@/data/Header/socialMediaItems";
import WorkingExperience from "@/sections/WorkingExperience";

export default function Home() {
  const { openMenu, setOpenMenu } = useApp();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <main className="pt-6 pb-6 py-32">
      <Header />
      <Presentation />
      <FeaturedWorks />
      <WorkingExperience />
      {openMenu && (
        <aside
          data-aos="fade-in"
          className="flex flex-col overflow-hidden items-center justify-center fixed top-0 right-0 w-full h-full opacity-80 text-white bg-black/95 z-[9999]"
        >
          <CloseIcon
            onClick={() => setOpenMenu(false)}
            className="fixed top-5 right-5 cursor-pointer"
          />
          {navItems.map((item) => (
            <a
              data-aos="fade-in"
              data-aos-delay="400"
              onClick={() => setOpenMenu(false)}
              key={item.id}
              href={item.href}
              className="block shadow-sm hover:border-b-2 mb-5 font-bold text-[28px] uppercase text-center"
            >
              {item.name}
            </a>
          ))}
          <div className="fixed flex gap-2 bottom-10">
            {socialMediaItems.map((item) => (
              <a key={item.id} target="_blank" href={item.href}>
                <item.icon />
              </a>
            ))}
          </div>
        </aside>
      )}
    </main>
  );
}
