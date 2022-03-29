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
                  Hi, I'm Hector, a student of computer engineering at the
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
              src="https://images.unsplash.com/photo-1648468091744-a7fb8ed4e515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
                  It's always good to go well equipped to the places where you
                  are needed, that's why I try to keep my tools updated as well
                  as my knowledge about them.
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

      {/* <div className="h-full flex items-center justify-center">
        <div className="flex-1 h-full flex items-center justify-center">
          <Content
            title="My Path"
            text={
              <>
                Massa posuere dictum viverra at pellentesque etiam. Id
                scelerisque nunc magna porttitor varius et, nec senectus. Nibh
                duis in molestie eros, vitae eu. Ullamcorper integer nunc,
                sollicitudin convallis id.
                <br />
                Non ut sit amet mauris neque. Sapien, interdum ipsum vitae
                risus.
              </>
            }
          />
        </div>
        <div className="flex-1 h-full flex items-center justify-center">
          <div className="w-96 h-96 relative">
            <Image
              src="https://images.unsplash.com/photo-1648468091744-a7fb8ed4e515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Picture of the author"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div> 
      </div>*/}
    </motion.div>
  );
}
