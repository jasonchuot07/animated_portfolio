import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles'

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ['Hi, Jason Mai here',"I'm a Tech enthusiast", 'Love coding & problem sovling', 'Cat person'],
    loop: true,
    delaySpeed: 2200,
    typeSpeed: 50,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      
      <img className='relative rounded-full object-cover h-32 w-32 mx-auto' src="https://lh3.googleusercontent.com/pw/AL9nZEV1Nkblt1Y12PYpeUIgnRurmwXBjW4w75jZxdSKfTzlptAs4bD8VPiHPKQvrpQ4_h2y0v2LBIsePyUKAOb-8p03SQ-wq4MhUH7JERSmAb3PoFVkzXuQauIGAQ75weCPvbJFa55ufV7d_rQdv6T-vY9CVw=w469-h625-no?authuser=0" alt="profile picture" />

      <div className='z-20'>
        <h2 className='text-small uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <span className='text-3xl lg:text-5xl font-semibold scroll-px-10px'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='green' />
        </span>
        <div className='pt-5'>
          <Link href='#about'><button className="heroButton">About</button></Link>
          <Link href='#experience'><button className="heroButton">Experience</button></Link>
          <Link href='#skills'><button className="heroButton">Skills</button></Link>
          <Link href='#projects'><button className="heroButton">Projects</button></Link>
        </div>
      </div>


      
    </div>
  )
}

export default Hero