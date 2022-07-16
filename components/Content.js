import { motion } from 'framer-motion'
import { FadeInRight } from '../animations/ContentCard'

export default function Content ({ title, text }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={FadeInRight}
      className="flex flex-col justify-center gap-y-4 w-full sm:max-w-prose px-1 text-dark dark:text-light"
    >
      <h1 className="font-sans font-bold text-4xl">{title}</h1>
      <p className="font-sans font-normal text-base opacity-90 dark:opacity-70">
        {text}
      </p>
    </motion.div>
  )
}
