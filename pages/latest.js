import Content from "../components/Content";
import Card2 from "../components/cards/Card2";
import { motion } from "framer-motion";
import { stagger, variants } from "../animations/Latest";
import { work } from "../data/work";

export default function Latest() {
  const latest = work.filter(item => item.name !== "portfolio" ).slice(0,6)
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="h-full flex flex-col xl:flex-row items-center justify-center gap-10 mt-10 xl:mt-28"
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
      <div className="flex-1 h-full flex items-center justify-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-prose xl:w-full flex flex-wrap gap-2 justify-center"
        >
          {latest.map((item) => (
            <Card2
              key={item.id}
              img={item.img}
              resource={item.html_url}
              title={item.name}
              category={item.topics}
              object={item.object}
              variants={variants}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}