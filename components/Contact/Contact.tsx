import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/'

type Props = {}

const Contact = (props: Props) => {
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className="absolute top-24 uppercase text-gray-500 text-2xl tracking-[20px]">Contact Me</h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    I have got just what you need. {' '}
                    <span className='decoration-[#0fdf6d]/50 underline'>Let's Talk</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#37db7c] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+1 (647).978.2169</p>
                    </div>
                    
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#37db7c] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>jason.mai.mca@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#37db7c] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>North York, Ontario, Canada</p>
                    </div>
                    
                </div>

                <form className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input className='contactInput' type='text' />
                        <input className='contactInput' type='text' />
                    </div>

                    <input className='contactInput' type='text' />

                    <textarea className='contactInput' />

                    <button>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Contact