import Card2 from "../components/cards/Card2";
import MCS from "../components/cards/MCS";
import { motion } from "framer-motion";
import { stagger, variants } from "../animations/All";
import { work } from "../data/work";

export default function All() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="flex justify-center gap-1 sm:gap-2 md:gap-3 mt-10"
    >
      <motion.div
        layout
        initial="initial"
        animate="animate"
        variants={stagger}
        className="container flex flex-wrap gap-1 sm:gap-2 md:gap-3 justify-start"
      >
        {work.map((item) => (
          <Card2
            key={item.id}
            img={item.img}
            resource={item.html_url}
            title={item.name}
            category={item.topic}
            object={item.object}
            variants={variants}
          />
        ))}
        <MCS variants={variants} />
      </motion.div>
    </motion.div>
  );
}