import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
    const projects = [1,2,3,4,5]

    return (
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5}}
        className="h-screen pb-4 relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase text-gray-500 text-2xl tracking-[20px]">Projects</h3>

            <div className='relative w-full flex overflow-x-scroll scrollbar overflow-y-hidden snap-x snap-mandatory z-20'>
                {projects.map((project, i) => (
                    <div className='w-screen pt-36 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center h-screen'>
                        <motion.img 
                        initial={{ y: -200, opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true }}
                        className='w-[400px]' src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1001&q=80" alt="" />

                        <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-2xl font-semibold text-center'>
                                <span className='underline decoration-[#29c574]/70'>
                                    Project {i+ 1} of {projects.length}: 
                                </span>
                                {' '}HIMS Clone
                            </h4>

                            <div className='text-base text-gray-300 text-center w-[500px]'>
                                HIMS website clone using Typescript done during an interview. GraphQL & Apollo as Back-End and fetch 30 posts information using it for rendering post cards using infinite scrolling.
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[25%] bg-[#30ffc1]/20 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    )
}

export default Projects