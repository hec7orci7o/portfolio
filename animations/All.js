export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
