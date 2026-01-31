import { delay, motion } from "framer-motion";
import React from "react";
const Nav = () => {
  const array = ["Home", "Service", "About ", "Projects", "Contact Us"];

  const variants = {
    initial: { opacity: 0, rotateX: 90, translateX: -20, translateY: 40 },

    enter: (index) => ({
      opacity: 1,
      transition: { delay: 0.7 + 0.2 * index, ease: [0.85, 0, 0.15, 1] },
      translateX: 0,
      rotateX: 0,
      translateY: 0,
    }),
    close: (index) => ({
      opacity: 0,
      transition: { delay: 0.7 + 0.2 * index, ease: [0.85, 0, 0.15, 1] },
    }),
  };
  return (
    <div className="mt-24 px-10 space-y-3">
      {array.map((item, index) => (
        <div
          style={{ perspective: "120px", perspectiveOrigin: "bottom" }}
          key={index}
        >
          <motion.div
            variants={variants}
            custom={index}
            initial="initial"
            animate="enter"
            exit="close"
          >
            <a className="text-4xl font-semibold uppercase cursor-pointer">
              {item}
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Nav;
