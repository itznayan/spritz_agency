export const text = {
  initial: {
    opacity: 1,
    y: 0,
  },
  enter: {
    opacity: 0,
    y: -200,
    transition: { duration: 0.65, delay: 0.035, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { y: 0 },
  },
  exit: {
    opacity: 1,

    transition: { duration: 0.75, delay: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

export const curve = (initialPath: string, targetPath: string) => {
  return {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1.35, delay: 0.3, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1.05, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

export const translate = {
  initial: {
    y: "-300px",
  },
  enter: {
    y: "-100vh",
    transition: { duration: 1.45, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: {
      y: "100vh",
    },
  },
  exit: {
    y: "-300px",
    transition: { duration: 1.05, ease: [0.76, 0, 0.24, 1] },
  },
};
