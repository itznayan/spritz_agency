import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Curve from "./Curve";
import { menuSlide } from "./Animation";
import { usePathname } from "wouter/use-browser-location";
import Link from "./navbarItem/Link";
import { Link as WLink } from "wouter";
const Navbar = ({ isActive, setIsActive }) => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
  ];
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Service",
      href: "/services",
    },

    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "About ",
      href: "/about",
    },
  ];
  const containerVariants = {
    initial: { x: "calc(100% + 100px)" },
    open: {
      x: "0%",
      transition: {
        ease: [0.85, 0, 0.15, 1],
        duration: 0.6,
      },
    },
    exit: {
      x: "calc(100% + 100px)",
      transition: {
        ease: [0.85, 0, 0.15, 1],
        duration: 0.5,
      },
    },
  };
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const handleClick = () => {
    setIsActive(false); // close menu on every link click
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed top-0 right-0 h-screen"
      style={{ backgroundColor: '#ff7a1a' }}
    >
      {/* CURVE (moves WITH menu) */}

      {/* MENU */}
      <div className="flex  box-border h-full px-[80px] py-[100px]  flex-col justify-between ">
        <div className=" mb-10">
          <p className="border-b pb-2 border-zinc-300 text-zinc-200 text-xs uppercase">
            Navigations
          </p>
        </div>

        {navItems.map((data, index) => {
          return (
            <Link
              key={index}
              onClick={handleClick}
              data={{ ...data, index }}
              isActive={selectedIndicator == data.href}
              setSelectedIndicator={setSelectedIndicator}
            ></Link>
          );
        })}
        <div className="flex w-full text-zinc-100 mt-20 text-sm justify-between gap-[40px]">
          {navLinks.map((item) => (
            <WLink key={item.href} href={item.href} onClick={handleClick}>
              {item.label}
            </WLink>
          ))}
        </div>
      </div>

      <Curve />
    </motion.div>
  );
};

export default Navbar;
