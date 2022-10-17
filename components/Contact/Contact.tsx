import React from 'react'

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

                <div className=''>

                </div>
            </div>

        </div>
    )
}

export default Contact