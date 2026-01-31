import React, { useState } from "react";
import Button from "./Button";
import { AnimatePresence, delay, motion } from "framer-motion";
import Nav from "./Nav";

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  const variants = {
    close: {
      top: 0,
      left: 0,
      width: 100,
      height: 40,
      transition: { ease: [0.85, 0, 0.15, 1], delay: 0.35, duration: 0.55 },
    },
    open: {
      left: "25px",
      top: "-10px",
      width: 400,
      height: 550,
      transition: { ease: [0.85, 0, 0.15, 1], duration: 0.55 },
    },
  };
  return (
    <div className=" flex  fixed right-12 top-4 ">
      <AnimatePresence initial={false}>
        <motion.div
          variants={variants}
          className="relative overflow-hidden top-0 right-0 rounded-3xl"
          style={{ backgroundColor: '#ff7a1a' }}
          animate={isActive ? "open" : "close"}
        >
          {isActive && <Nav />}
        </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
      </AnimatePresence>
    </div>
  );
};

export default Index;
