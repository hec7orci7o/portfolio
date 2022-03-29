export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const variants = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};
