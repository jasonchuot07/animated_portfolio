import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative text-center md:text-left md:flex-row h-screen mx-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>About</h3>
      <motion.img initial={{
        x:-200
      }} animate={{
        x:0,
      }} src='' />
    </div>
  )
}

export default About