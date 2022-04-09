import Image from "next/image";
import { motion } from "framer-motion";

export default function Card2({
  img,
  resource,
  title,
  category,
  object,
  variants,
}) {
  return (
    <motion.div
      layout
      variants={variants}
      className="w-28 h-44 sm:w-36 sm:h-52 md:w-40 md:h-56 flex justify-center items-center relative"
    >
      <div className="w-full h-full relative bg-black">
        <Image
          src={img}
          alt={title}
          layout="fill"
          className="object-cover object-center select-none opacity-70 "
        />
      </div>
      <a
        href={resource}
        target="_blank"
        rel="noreferrer"
        className="w-full h-full absolute contenedor"
      >
        <div className="card">
          <div
            className={`w-full h-full flex flex-col justify-center items-center ${object}`}
          >
            <span className="text-sm font-bold font-sans text-gray-700 capitalize truncate text-ellipsis overflow-hidden select-none">
              {title}
            </span>
            <span className="text-sm font-bold font-sans text-gray-600 capitalize truncate text-ellipsis overflow-hidden select-none">
              {category}
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
