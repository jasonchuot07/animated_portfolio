import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from '../ExperienceCard/ExperienceCard'

type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5}}
    className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full pt-10 justify-evenly mx-auto items-center">
       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        
       </h3>
       <div className="w-full h-full flex space-x-10 overflow-x-scroll scrollbar p-10 snap-x snap-mandatory">
          {/* Experience card */}
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
    </motion.div>
  )
}

export default Experience