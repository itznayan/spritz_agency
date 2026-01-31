"use client";

import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { text, curve, translate } from "./motion";

const routes: Record<string, string> = {
  "/": "Home",
  "/services": "Services",
  "/presentation": "Our Work",
  "/about": "About",
  "/contact": "Contact",
};
const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children }) {
  const [location] = useLocation();
  const [dimensions, setDimensions] = useState(() => ({
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: typeof window !== "undefined" ? window.innerHeight : 1080,
  }));

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const resize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      }, 150);
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative">
      {/* route text */}
      <motion.p
        className="fixed w-full text-center overflow-hidden top-[45%] z-[100] text-white text-[50px] pointer-events-none will-change-[opacity,transform]"
        variants={text}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {routes[location]}
      </motion.p>

      <SVG {...dimensions} />

      {/* page content */}
      <div className="relative z-auto" style={{ willChange: "contents" }}>
        {children}
      </div>
    </div>
  );
}

const SVG = ({ width, height }: { width: number; height: number }) => {
  const curveHeight = height + 600;

  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${curveHeight}
    Q${width / 2} ${curveHeight + 300} 0 ${curveHeight}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg
      className="fixed top-0 left-0 z-[90] pointer-events-none will-change-transform"
      width={width}
      height={curveHeight}
      viewBox={`0 0 ${width} ${curveHeight}`}
      preserveAspectRatio="none"
      style={{ willChange: "transform" }}
      {...anim(translate)}
    >
      {/* curve */}
      <motion.path
        fill="black"
        style={{ willChange: "d" }}
        {...anim(curve(initialPath, targetPath))}
      />
    </motion.svg>
  );
};
