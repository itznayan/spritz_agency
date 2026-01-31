// import React from "react";
import { motion } from "framer-motion";

const titleVariants = {
  initial: {
    x: 0,
    color: "#d4d4d8",
  },
  hover: {
    x: 40,
    color: "#ffffff",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const roleVariants = {
  initial: {
    x: 0,
    color: "#a1a1aa",
  },
  hover: {
    x: -40,
    color: "#ffffff",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

type AboutInfoProps = {
  index: number;
  title: string;
  role: string;
  active: boolean; // ✅ ADD THIS
  setModal: (data: { active: boolean; index: number }) => void;
};


export default function AboutInfo({
  index,
  title,
  role,
  setModal,
}: AboutInfoProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="
        flex items-center justify-between
        py-10
        border-b border-white/10
        cursor-pointer
        group
      "
    >
      {/* TITLE */}
      <motion.h2
        variants={titleVariants}
        className="
          text-4xl md:text-5xl xl:text-6xl
          font-mono font-extrabold
          tracking-tight
          text-zinc-300
        "
      >
        {title}
      </motion.h2>

      {/* ROLE */}
      <motion.p
        variants={roleVariants}
        className="
          text-lg md:text-xl
          font-mono
          text-zinc-400
          whitespace-nowrap
        "
      >
        {role}
      </motion.p>
    </motion.div>
  );
}
