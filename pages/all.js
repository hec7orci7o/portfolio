import Card2 from "../components/cards/Card2";
import MCS from "../components/cards/MCS";
import { motion, Reorder } from "framer-motion";
import { stagger, variants } from "../animations/All";
import { work } from "../data/work";
import { useState } from "react";

export default function All({ allWork }) {
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
        {allWork.map((item) => (
          <Card2
            key={item.id}
            img={work[item.id]}
            resource={item.html_url}
            title={String(item.name).replace("-", " ")}
            category={String(item.topics[0]).replace("-", " ")}
            object={"hexagon"}
            variants={variants}
          />
        ))}
        <MCS variants={variants} />
      </motion.div>
    </motion.div>
  );
}

export async function getServerSideProps() {
  const { data: allWork } = await fetch(
    `${process.env.NEXT_URL}/api/github?q=all`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return {
    props: { allWork },
  };
}
