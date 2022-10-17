import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean;
    img?: string;
}

const Skill = ({directionLeft, img}: Props) => {
  return (
    <div className='group relative flex cursor-pointer justify-center items-center'>
        <motion.img 
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={img}
            className='object-contain w-24 h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className="absolute opacity-0 group-hover:opacity-90 transition duration-500 ease-in-out group-hover:bg-slate-600 group-hover:border group-hover:border-gray-700 h-24 w-24 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0">
            <div className="flex items-center justify-center h-full ">
                <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill