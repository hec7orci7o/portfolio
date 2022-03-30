import Card2 from "../components/cards/Card2";
import MCS from "../components/cards/MCS";
import { motion } from "framer-motion";
import { stagger, variants } from "../animations/All";
import { work } from "../data/work";

export default function All({ allWork }) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="h-full mt-40 flex justify-center"
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="container px-10 flex flex-wrap gap-2 justify-start"
      >
        {allWork.map((i) => (
          <Card2
            key={i.id}
            img={work[i.id]}
            resource={i.html_url}
            title={String(i.name).replace("-", " ")}
            category={String(i.topics[0]).replace("-", " ")}
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
