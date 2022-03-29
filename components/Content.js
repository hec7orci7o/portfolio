import { motion } from "framer-motion";
import { FadeInRight } from "../animations/ContentCard";

export default function Content({ title, text }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={FadeInRight}
      className="flex flex-col justify-center gap-y-4"
    >
      <h1 className="max-w-prose font-sans font-bold text-4xl">{title}</h1>
      <p className="max-w-prose font-sans font-normal text-base">{text}</p>
    </motion.div>
  );
}
