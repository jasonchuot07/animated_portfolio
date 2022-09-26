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
      
      <img className='relative rounded-full object-cover h-32 w-32 mx-auto' src="https://lh3.googleusercontent.com/uL-0hlVE1Mc6OiL61j2aZaCWeCHQgWPIbD6WtUBc-7lwFDN6XkdxJYCFMFbZP1ZwWeYNm6IecZc3vTlbXMuuJToOzxgNVMimac3hn7Z87MO8_Ynqzisn_-hQnijQ6gXeHelTHb5rK4i5JdD63U1aYnRY9a7iCTiFUlCBQbiYE8htomRAUqkTGNR8E1oF2nU37A0rGwwBChoX6Kzc_s55t7YVQ-QJq0IIul8kvBDZuU_bqjlc2O4PLpPyPNlgbwAr2lWXp5PpA2DFzaOF2LwdFx4zUkKv7bAknFTN3rlxHzP9n7y2hJyyLF_Kq_hlQBBVqQmrpGre-sBCGNf0BC7wHkJ2emLMr1fe8qnQTU3ZepbdR8igTo8mxa32jsm7M1A0gN3GVxdUkVGRgGE0WBseVN10cPQschilE24VD1rU8iKNgxUINu3NX6SSQ9oFWbpozJJTPUhAJB7iUQVz_R2reGqhJZ-S85eJK0VqhyOyWjDxbOpqXPE23jftJD95vcC2ZxPTtmt6XE1aFMPDkODpY24TrNy7PDiokCTvnXAH0h8dKa8tg4Ozdj-gEFZUnJuseWn-6tzUe-H2J1ceIanUYLOuI_aN6mR10rdnTD1gHAHC0XeiArN2ezsSdvJKhHfIAteZFfaLhjRFQrW_mNvrMDeYFKcmQ9_GXQNzuO9QjnWHC5Wlscu9l0WNU2Rzna_22HV8D6oyYKE-KqFTiy9BMQoYKrhyBYLNp8PjBNPmwFuKNRVmD3Md6h8itygwBAkcv0eMguKrX8MUULyLawA1cOWwa6HMZEMhWBTbPmnRguefBFJ1fo2zNn-itlzBETO8kay-fNg=w469-h625-no?authuser=0" alt="profile picture" />

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