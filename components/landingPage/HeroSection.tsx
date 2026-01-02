import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <div className='h-screen flex flex-col justify-center w-full items-center gap-5'>
      <div className='flex flex-col gap-3'>
        <h1 className='animate-pulse text-5xl md:text-6xl font-bold text-center bg-linear-to-b from-white to-purple-400 bg-clip-text text-transparent'>
          Beat Real Job <br />
          Interviews with AI
        </h1>

        <p className='bg-linear-to-b from-white to-purple-400 bg-clip-text text-transparent font-semibold text-sm'>
          Upload your resume and get personalized feedback, skill gap analysis,
          and practice rounds just like top tech companies
        </p>
      </div>
      <Button className='bg-white text-black/90 hover:bg-white hover:text-black/80 cursor-pointer hover:scale-100 font-bold'>
        Start Your First AI Interview
      </Button>
    </div>
  )
}

export default HeroSection
