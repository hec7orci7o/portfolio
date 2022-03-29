export const FadeInUp = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } },
};

export const Stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Tool = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};
