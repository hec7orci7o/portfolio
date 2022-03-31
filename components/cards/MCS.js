import { motion } from "framer-motion";

export default function MCS({ variants }) {
  return (
    <motion.div
      variants={variants}
      className="flex justify-center items-center w-28 h-44 sm:w-36 sm:h-52 md:w-40 md:h-56 relative bg-light bg-opacity-90"
    >
      <div className="w-full h-full absolute">
        <div className="card">
          <div className="w-full h-full flex flex-col justify-center items-center end">
            <span className="text-center text-xs font-black font-sans text-gray-700 uppercase select-none">
              more
            </span>
            <span className="text-center text-xs font-black font-sans text-gray-700 uppercase select-none">
              comming
            </span>
            <span className="text-center text-xs font-black font-sans text-gray-700 uppercase select-none">
              soon
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
