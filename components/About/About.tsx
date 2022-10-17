import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div className='flex flex-col relative md:text-left md:flex-col h-screen mx-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='uppercase tracking-[20px] text-2xl'>About</h3>
      <motion.img initial={{
        x:-200,
        opacity: 0,
      }} whileInView={{
        x:0,
        opacity: 1,
      }} viewport={{once:true}}
      transition={{
        duration: 1.2,
      }} src='https://lh3.googleusercontent.com/pw/AL9nZEXL-3vmuzV4o3vYHBwDkfuwphXSMfmOkUcjDmJomqS0CBtC0G7EwwC8GAwN8O9o1q8kycUgXJcXDkku1UaG779X4d3sveaiQgAei76bz7YOcO4bFDU2NxnnLPf38CrjVfXzxonJAJJMArp0-FQ5peHBhg=w305-h625-no?authuser=0' 
      className='-mb-20 md:mt-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-full md:w-56 md:h-56 xl:w-[300px] xl:h-[300px]'/>
      <div className="space-y-10 px-10 md:px-10 mt-16 text-center pl-4 pr-4">
        <h4 className="text-4xl font-semibold">
          Here is a <span className='underline decoration-[#2fdd83]'>little</span> background
        </h4>
        <p className="text-lg lg:w-[600px]">
          I'm Tri and I'm a self taught developer and I've been coding for the past 2 years in several companies. I've developed full stack apps and teamed up to take on other impactful projects
        </p>
      </div>
    </motion.div>
  )
}

export default About