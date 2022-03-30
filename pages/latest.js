import Content from "../components/Content";
import Card2 from "../components/cards/Card2";
import { motion } from "framer-motion";
import { stagger, variants } from "../animations/Latest";
import { work } from "../data/work";

export default function Latest({ allWork }) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="h-full flex items-center justify-center"
    >
      <div className="flex-1 h-full flex items-center justify-center">
        <Content
          title="Latest"
          text={
            <>
              <p>
                These are the last projects I have published in my personal
                github account, if you are curious about any of them you can
                always visit and take a look.
              </p>
              <p>
                If you have any suggestion about any of them don&apos;t hesitate
                to contact me, any kind of constructive criticism is welcome.
              </p>
            </>
          }
        />
      </div>
      <div className="flex-1 h-full flex flex-col items-center justify-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="w-4/5 flex flex-wrap gap-2 justify-center"
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
        </motion.div>
      </div>
    </motion.div>
  );
}

export async function getServerSideProps() {
  const { data: allWork } = await fetch(
    `${process.env.NEXT_URL}/api/github?q=6`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return {
    props: { allWork },
  };
}
