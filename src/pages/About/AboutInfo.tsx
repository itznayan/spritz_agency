"use client";

import React from "react";
import { motion } from "framer-motion";

interface AboutInfoProps {
  index: number;
  title: string;
  role: string;
  active: boolean;
  setModal: React.Dispatch<
    React.SetStateAction<{
      active: boolean;
      index: number;
    }>
  >;
}

const AboutInfo = ({
  index,
  title,
  role,
  active,
  setModal,
}: AboutInfoProps) => {
  const handleMouseEnter = () => {
    setModal({
      active: true,
      index,
    });
  };

  const handleMouseLeave = () => {
    setModal({
      active: false,
      index,
    });
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        w-full
        border-b
        border-zinc-700
        py-5

        sm:py-6

        md:py-7

        lg:py-14
      "
    >
      {/* =====================================================
          MOBILE / TABLET
          NAME
          ROLE BELOW NAME
      ===================================================== */}

      <div
        className="
          flex
          w-full
          flex-col
          gap-2

          sm:gap-2.5

          md:gap-3

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-8
        "
      >
        {/* NAME */}

        <motion.h3
          whileHover={{
            x: 4,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="
            min-w-0
            break-words
            font-mono
            text-2xl
            font-medium
            leading-tight
            tracking-tight
            text-zinc-100

            sm:text-3xl

            md:text-4xl

            lg:text-5xl

            xl:text-6xl
          "
        >
          {title}
        </motion.h3>

        {/* ROLE */}

        <p
          className="
            max-w-full
            break-words
            text-sm
            leading-5
            text-zinc-400

            sm:text-base
            sm:leading-6

            md:text-base
            md:leading-6

            lg:max-w-[45%]
            lg:text-right
            lg:text-lg
            lg:leading-7
          "
        >
          {role}
        </p>
      </div>

      {/* SMALL ACTIVE LINE */}

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: active ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          transformOrigin: "left",
        }}
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full
          bg-zinc-200

          lg:h-[3px]
        "
      />
    </motion.div>
  );
};

export default AboutInfo;
