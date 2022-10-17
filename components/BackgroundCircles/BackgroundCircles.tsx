import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div initial={{
        opacity: 0,
    }} 
    animate={{
        scale: [1,1.2,1.5,1.2,1],
        opacity: [0.1,0.2, 0.4, 0.8, 0.1, 1.0]
    }}
    transition={{

        duration: 2
    }}
    className="relative flex justify-center items-center">
        <div className="absolute border border-[#444] h-[200px] w-[200px] rounded-full mt-80 animate-ping"/>
        <div className="absolute border border-[#444] h-[300px] w-[300px] rounded-full mt-80 animate-ping"/>
        <div className="absolute border border-[#444] h-[350px] w-[350px] rounded-full mt-80 animate-ping"/>
        <div className="absolute border border-[#00ffc8] h-[550px] w-[550px] rounded-full mt-80 animate-pulse"/>
        <div className="absolute border border-[#444] h-[650px] w-[650px] rounded-full mt-80 animate-ping"/>
    </motion.div>
  )
}

export default BackgroundCircles