"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import Index from "./navbar/Index";
import { Pivot as Hamburger } from "hamburger-react";
import Navbar from "./Navbar";

export function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 50) {
      // scrolling down
      setHidden(true);
      setIsActive(false);
    } else {
      // scrolling up
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 z-50 w-full h-20 bg-slate-200 flex items-center justify-between backdrop-blur-md"
    >
      {/* LOGO */}
      <div>
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="public\flogo.png"
            className="h-[15vw] w-auto transition-transform duration-300"
            alt="Logo"
          />

          {/* <span className="font-display text-3xl font-bold tracking-tight text-white">
            Spritz
            </span> */}
        </Link>
      </div>

      {/* MENU */}
      {/* <Index /> */}
      <div className="fixed right-0 mx-8 z-10 rounded-full p-1 px-2 bg-stone-800">
        <Hamburger
          toggled={isActive}
          color="white"
          toggle={setIsActive}
          direction="left"
        />
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Navbar isActive={isActive} setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.nav>
  );
}
