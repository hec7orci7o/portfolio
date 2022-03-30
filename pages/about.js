import Image from "next/image";
import Content from "../components/Content";
import {
  SiLinux,
  SiDocker,
  SiGit,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiReact,
  SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";
import { FadeInUp, Stagger, Tool } from "../animations/About";
import me from "/public/me.jpg";

export default function Home() {
  return (
    <motion.div exit={{ opacity: 0 }} className="h-full">
      <div className="h-full flex items-center justify-center">
        <div className="flex-1 h-full flex items-center justify-center">
          <Content
            title="Who Am I"
            text={
              <>
                <p>
                  Hi, I&apos;m Hector, a student of computer engineering at the
                  university of university of zaragoza moved by the desire to
                  learn something new every day.
                </p>
                <p>
                  Within the IT sector, what most attracts my attention and is
                  currently my passion is the world of security, system
                  administration and web apps.
                </p>
                <p>
                  On the other hand, in my free time I like working out and
                  meeting my friends.
                </p>
              </>
            }
          />
        </div>
        <div className="flex-1 h-full flex items-center justify-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={FadeInUp}
            className="w-96 h-96 relative"
          >
            <Image
              src={me}
              alt="Picture of the author"
              layout="fill"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="h-full flex items-center justify-center">
        <div className="flex-1 h-full flex items-center justify-center">
          <Content
            title="My Toolkit"
            text={
              <>
                <p>
                  It&apos;s always good to go well equipped to the places where
                  you are needed, that&apos;s why I try to keep my tools updated
                  as well as my knowledge about them.
                </p>
                <p>
                  Apart from the ones you can see below, I also have knowledge
                  in other technologies such as: Java, Haskell, Flex & Bison,
                  relational and non-relational databases and other web
                  frameworks such as django and next js.
                </p>
              </>
            }
          />
        </div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={Stagger}
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1 h-full flex flex-col items-center justify-center gap-2"
        >
          <motion.div
            variants={Tool}
            className="flex items-center justify-center w-36 h-16 shadow hover:text-red-600"
          >
            <SiLinux className="text-4xl" />
          </motion.div>
          <div className="flex gap-2">
            <motion.div
              variants={Tool}
              className="flex items-center justify-center w-36 h-16 shadow hover:text-blue-600"
            >
              <SiDocker className="text-4xl" />
            </motion.div>
            <motion.div
              variants={Tool}
              className="flex items-center justify-center w-36 h-16 shadow hover:text-orange-500"
            >
              <SiGit className="text-4xl" />
            </motion.div>
          </div>
          <div className="flex gap-2">
            <motion.div
              variants={Tool}
              className="flex items-center justify-center w-36 h-16 shadow hover:text-indigo-800"
            >
              <SiCplusplus className="text-4xl" />
            </motion.div>
            <motion.div
              variants={Tool}
              className="flex items-center justify-center w-36 h-16 shadow hover:text-yellow-300"
            >
              <SiJavascript className="text-4xl" />
            </motion.div>
            <motion.div
              variants={Tool}
              className="flex items-center justify-center w-36 h-16 shadow hover:text-blue-500"
            >
              <SiPython className="text-4xl" />
            </motion.div>
          </div>
          <div className="flex gap-2">
            <motion.div
              variants={Tool}
              className="flex items-center justify-center w-36 h-16 shadow hover:text-blue-400"
            >
              <SiReact className="text-4xl" />
            </motion.div>
            <motion.div
              variants={Tool}
              className="flex items-center justify-center w-36 h-16 shadow hover:text-green-400"
            >
              <SiExpress className="text-4xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
