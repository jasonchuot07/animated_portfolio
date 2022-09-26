import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex mx-auto z-20 items-start p-2 justify-between max-w-7xl xl:items-center">
        <motion.div initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }} transition={{
            duration: 1,
        }} className="flex flex-row-items-center">
            <SocialIcon url='https://www.facebook.com' bgColor='transparent' fgColor='gray' />
            <SocialIcon url='https://www.instagram.com' bgColor='transparent' fgColor='gray' />
            <SocialIcon url='https://www.github.com' bgColor='transparent' fgColor='gray' />
        </motion.div>

        <motion.div initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }} transition={{
            duration: 1,
        }} className="flex flex-row items-center text-gray-300 cursor-pointer">
            <SocialIcon network='email' fgColor='gray' bgColor='transparent' />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                Email me
            </p>
        </motion.div>
    </header>
  )
}

export default Header