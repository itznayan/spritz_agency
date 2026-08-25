"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      data-scroll-section
      data-scroll
      data-scroll-speed="-0.35"
      className="w-full min-h-screen flex items-center relative overflow-hidden"
      style={{ backgroundColor: "#E5E5E5" }}
    >
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="relative min-h-[650px] sm:min-h-[700px] lg:min-h-[600px] flex items-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-20 w-full"
          >
            <h1
              className="
                text-[clamp(3.5rem,15vw,12rem)]
                sm:text-[clamp(4.5rem,13vw,10rem)]
                lg:text-[clamp(6rem,11vw,12rem)]
                font-black
                leading-[0.82]
                text-black
                uppercase
                tracking-tight
              "
              style={{
                fontFamily: "'Satoshi', sans-serif",
                letterSpacing: "-0.04em",
              }}
            >
              <span className="block">IT'Z A</span>
              <span className="block">CREATIVE</span>
              <span className="block">STUDIO.</span>
            </h1>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3,
            }}
            className="
              absolute
              z-10
              pointer-events-none
              w-[220px]
              h-[220px]
              right-[-20px]
              top-[12%]

              sm:w-[280px]
              sm:h-[280px]
              sm:right-[-20px]
              sm:top-[10%]

              md:w-[350px]
              md:h-[350px]
              md:right-[-30px]
              md:top-[8%]

              lg:w-[430px]
              lg:h-[430px]
              lg:right-[-10px]
              lg:top-[5%]

              xl:w-[500px]
              xl:h-[500px]
              xl:right-0
              xl:top-[2.5%]
            "
          >
            <img
              src="/images/heroBG.PNG"
              alt="Creative portrait"
              className="w-full h-full object-cover"
              draggable={false}
            />

            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "rgba(255, 11, 85, 0.4)",
                mixBlendMode: "multiply",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
