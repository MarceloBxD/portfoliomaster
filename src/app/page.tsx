"use client";

import Feedbacks from "@/components/Feedbacks";
import FeaturedWorks from "@/sections/FeaturedWorks";
import Header from "@/sections/Header";
import Presentation from "@/sections/Presentation";

import { motion } from "framer-motion";
import { useApp } from "@/contexts/useContext";
import CloseIcon from "@/icons/svgs/CloseIcon";
import { navItems } from "@/data/Header/navItems";
import { socialMediaItems } from "@/data/Header/socialMediaItems";
import WorkingExperience from "@/sections/WorkingExperience";

export default function Home() {
  const { openMenu, setOpenMenu } = useApp();

  return (
    <main className="pt-6 pb-6 py-32">
      <Header />
      <Presentation />
      <FeaturedWorks />
      <Feedbacks />
      <WorkingExperience />
      {openMenu && (
        <motion.aside
          initial={{
            opacity: 0,
            right: "-100%",
          }}
          animate={{
            opacity: 1,
            right: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col overflow-hidden items-center justify-center fixed top-0 right-0 w-full h-full opacity-80 text-white bg-black/95 z-[9999]"
        >
          <CloseIcon
            onClick={() => setOpenMenu(false)}
            className="fixed top-5 right-5 cursor-pointer"
          />
          {navItems.map((item) => (
            <motion.a
              initial={{
                y: -20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.2 * item.id,
                duration: 0.4,
              }}
              onClick={() => setOpenMenu(false)}
              key={item.id}
              href={item.href}
              className="block shadow-sm hover:border-b-2 mb-5 font-work-sans font-bold text-[28px] uppercase text-center"
            >
              {item.name}
            </motion.a>
          ))}
          <div className="fixed flex gap-2 bottom-10">
            {socialMediaItems.map((item) => (
              <motion.a
                target="_blank"
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
        </motion.aside>
      )}
    </main>
  );
}
