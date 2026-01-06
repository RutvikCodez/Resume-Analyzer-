import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center flex flex-col items-center gap-6">

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="bg-linear-to-b from-white to-purple-400 bg-clip-text text-transparent">
            Beat Real Job
          </span>
          <br />
          <span className="text-white">
            Interviews with AI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-white/70 max-w-2xl">
          Upload your resume, get AI-driven feedback, identify skill gaps, and
          practice real interview rounds inspired by top tech companies.
        </p>

        {/* CTA */}
        <Button
          className="
            mt-4 px-8 py-6 text-lg font-semibold
            bg-purple-500 text-white
            rounded-xl
            hover:bg-purple-600
            hover:scale-105
            transition-all duration-300
            shadow-lg shadow-purple-500/30
          "
        >
          Start Your First AI Interview
        </Button>

      </div>
    </section>
  )
}

export default HeroSection
