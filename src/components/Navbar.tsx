import React, { useState } from "react";

import { motion } from "framer-motion";

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
      title: "About",
      href: "/about",
    },
  ];

  const pathname = usePathname();

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="
        fixed
        top-0
        right-0
        h-screen
        w-full
        sm:w-[85%]
        md:w-[70%]
        lg:w-[550px]
        xl:w-[600px]
        bg-cyan-800
      "
    >
      {/* ================= MENU ================= */}

      <div
        className="
          flex
          box-border
          h-full
          w-full
          px-6
          sm:px-8
          md:px-12
          lg:px-[60px]
          xl:px-[80px]
          py-16
          sm:py-20
          md:py-24
          lg:py-[100px]
          flex-col
          justify-between
        "
      >
        {/* ================= HEADER ================= */}

        <div className="mb-8 sm:mb-10">
          <p
            className="
              border-b
              pb-2
              border-zinc-300
              text-zinc-200
              text-[10px]
              sm:text-xs
              uppercase
              tracking-wider
            "
          >
            Navigations
          </p>
        </div>

        {/* ================= MAIN NAVIGATION ================= */}

        <div className="flex flex-col flex-1 justify-center">
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                onClick={handleClick}
                data={{
                  ...data,
                  index,
                }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>

        {/* ================= BOTTOM LINKS ================= */}

        <div
          className="
            flex
            w-full
            text-zinc-100
            mt-12
            sm:mt-16
            md:mt-20
            text-xs
            sm:text-sm
            justify-between
            flex-wrap
            gap-x-4
            gap-y-3
          "
        >
          {navLinks.map((item) => (
            <WLink
              key={item.href}
              href={item.href}
              onClick={handleClick}
              className="hover:text-zinc-300 transition-colors"
            >
              {item.label}
            </WLink>
          ))}
        </div>
      </div>

      {/* ================= CURVE ================= */}

      <Curve />
    </motion.div>
  );
};

export default Navbar;
