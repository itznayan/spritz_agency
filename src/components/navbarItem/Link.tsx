import { slide, scale } from "../Animation";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
export default function Index({
  data,
  isActive,
  setSelectedIndicator,
  onClick,
}) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-3 h-3 bg-white rounded-[50%] absolute right-0"
      ></motion.div>
      <Link
        className="font-light pb-2 text-5xl text-white  z-50 "
        href={href}
        onClick={onClick}
      >
        {title}
      </Link>
    </motion.div>
  );
}
