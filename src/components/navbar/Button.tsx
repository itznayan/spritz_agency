import { motion } from "framer-motion";
import React, { useState } from "react";

const Button = ({ isActive, setIsActive }) => {
  return (
    <motion.div
      onClick={() => setIsActive(!isActive)}
      className="w-[100px] fixed h-[40px] top-4 right-12 bg-slate-400 overflow-hidden uppercase rounded-3xl cursor-pointer"
    >
      <motion.div
        animate={{ y: isActive ? "-100%" : 0 }}
        className="slider w-full h-full"
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.5 }}
      >
        <div className="relative w-full h-full  flex items-center justify-center">
          <PerspectiveText label="Menu" />
        </div>
        <div className="relative w-full h-full scale-[1] bg-zinc-900 text-white flex items-center justify-center">
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </motion.div>
  );
};
const PerspectiveText = ({ label }) => (
  <div className={"w-full h-full flex justify-center items-center"}>
    <p>{label}</p>
    <p className="absolute">{label}</p>
  </div>
);

export default Button;
