import { motion } from 'framer-motion'

export default function Articles () {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="h-full flex items-center justify-center mt-36"
    >
      <p className="border-2 border-black p-3 max-w-prose text-lg text-black dark:text-white dark:border-white select-none">
        Oops! it seems I haven&apos;t published any articles yet. <br />
        New articles will be included as soon as possible.
      </p>
    </motion.div>
  )
}
