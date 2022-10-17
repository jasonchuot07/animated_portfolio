import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[400px] xl:w-[650x] snap-center bg-[#292929] pt-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        className="w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center" src="https://lh3.googleusercontent.com/pw/AL9nZEUdjFWwqXcIyJlivuLJRWYcG9D4KGylm0VzVusyF5MuMGokRqzq-g72WjQoR-R96_ecyBj5TEguCgm8VEa_3lF2hT2xAiI2peZN7pPJc0ppKzPmEZI0HUgXIwheQV85W0M04dUXJyCME0iwpldIPkNIBA=w305-h625-no?authuser=0" alt="" />
        <div className="px-0 md:px-10">
          <h4 className='text-xl font-light'>React/Typescript Developer</h4>
          <p className='font-bold text-lg mt-1 mb-2'>Accredify.io</p>

          <div className="flex space-x-2 my-5">
            <img className='h-8 w-8 rounded-full object-cover' src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="" />
            <img className='h-8 w-8 rounded-full object-cover' src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="" />
            <img className='h-8 w-8 rounded-full object-cover' src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg" alt="" />
          </div>
          <p className='uppercase text-sm text-zinc-500'>From 2021 to 2022</p>

          <ul className='list-disc mt-2 space-y-4 text-gray-300'>
            <div>Re-creating and developing digital certificates and transcripts using Typescript and React from institutions in Singapore and expanding world wide</div>
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard