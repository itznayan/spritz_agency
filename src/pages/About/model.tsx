"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, projects }: any) {
  const { active, index } = modal;

  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const move = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX + 210);
      yMoveContainer(pageY);
      xMoveCursor(pageX + 210);
      yMoveCursor(pageY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* MODAL */}
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="
          absolute
          h-[300px] w-[250px]
          bg-white
          overflow-hidden
          pointer-events-none
          flex items-center justify-center
        "
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="
            absolute h-full w-full
            transition-[top] duration-500
            ease-[cubic-bezier(0.76,0,0.24,1)]
          "
        >
          {projects.map((project: any, i: number) => (
            <div
              key={i}
              style={{ backgroundColor: project.color }}
              className="h-full w-full flex items-center justify-center"
            >
              <img
                src={`/images/${project.src}`}
                alt="preview"
                className="h-full w-full object-cover object-top"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* CURSOR */}

      {/* CURSOR LABEL */}
    </>
  );
}
