import { motion } from "framer-motion";

export default function Articles() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="h-full flex items-center justify-center"
    >
      <p className="border-2 border-black p-3 max-w-prose text-lg">
        Oops! it seems I haven't published any articles yet. <br />
        New articles will be included as soon as possible.
      </p>
    </motion.div>
  );
}
