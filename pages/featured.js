import Card1 from '../components/cards/Card1'
import Content from '../components/Content'
import { motion } from 'framer-motion'
import { FadeInUp, FadeInDown } from '../animations/Featured'

export default function Featured () {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="flex flex-col xl:flex-row items-center justify-center py-10 gap-10 mt-24"
    >
      <div className="flex-1 flex items-center justify-center">
        <Content
          title="Featured"
          text={
            <>
              <p>These are the projects best rated by my community.</p>
              <p>
                HotAsm is a tool that simplifies the workflow in some subjects
                of the career as &quot;IC&quot; or &quot;AOC2&quot; allowing to
                save a lot of time to their students.
              </p>
              <p>
                On the other hand, BIdeas is an online coworking that I made
                with 2 other colleagues for the subject of information systems,
                it is noteworthy that it was rated with the highest mark.
              </p>
            </>
          }
        />
      </div>
      <div className="flex-1 h-full flex items-center justify-center">
        <div className="w-full flex flex-wrap gap-x-4 gap-y-10 justify-center">
          <motion.a
            href={'https://hotasm.vercel.app/'}
            target="_blank"
            rel="noopener noreferrer"
            initial="initial"
            animate="animate"
            variants={FadeInUp}
            className={'shadow-lg shadow-pink-600 cursor-default w-72 h-[28rem] sm:w-64 sm:h-[24rem] xl:w-72 xl:h-[28rem] max-h-[28rem] flex flex-col gap-y-2 bg-pink-300 p-2'}
          >
            <Card1
              img={
                'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              }
              title={'HotAsm'}
              description={
                'App for the translation of assembly code to binary that allows the definition of customized ISAs.'
              }
            />
          </motion.a>
          <motion.a
            href={'https://bideas.herokuapp.com/'}
            target="_blank"
            rel="noopener noreferrer"
            initial="initial"
            animate="animate"
            variants={FadeInDown}
            className={'shadow-lg shadow-yellow-600 cursor-default w-72 h-[28rem] sm:w-64 sm:h-[24rem] xl:w-72 xl:h-[28rem] max-h-[28rem] flex flex-col gap-y-2 bg-yellow-300 p-2'}
          >
            <Card1
              img={
                'https://images.unsplash.com/photo-1643447059942-70fef4193595?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80'
              }
              title={'BIdeas'}
              description={
                'Web application for recruiting qualified professionals and forming small work groups.'
              }
            />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
