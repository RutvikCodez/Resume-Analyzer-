import { ArrowRight, Zap } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

const FinalCTA = () => {
  return (
    <section className='py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black'>
      {/* Background gradients */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-fuchsia-500/20' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/30 rounded-full blur-[180px]'/>

      {/* Content */}
      <div className='relative max-w-4xl mx-auto text-center space-y-8'>
        <h2 className='text-5xl md:text-7xl font-bold leading-tight text-white'>
          Ready to{' '}
          <span className='bg-gradient-to-b from-white to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]'>
            Crush
          </span>
          <br />
          Your Next Interview?
        </h2>

        <p className='text-xl md:text-2xl text-white/70 max-w-2xl mx-auto'>
          Join <span className='text-white font-semibold'>50,000+</span>{' '}
          candidates who landed their dream jobs using our AI-powered interview
          platform.
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-6'>
          {/* Primary CTA */}
          <Button
            className='px-12 py-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(168,85,247,0.45)] flex items-center gap-3 '>
            Start Free Trial
            <Zap className='w-6 h-6 group-hover:rotate-12 transition-transform' />
          </Button>

          {/* Secondary CTA */}
          <Link href='/dashboard'>
            <Button className=' px-12 py-6 bg-neutral-900/70 backdrop-blur border border-white/10 rounded-2xl font-bold text-xl text-white hover:scale-105 hover:border-purple-500/40 transition-all duration-300 flex items-center gap-3 '>
              View Dashboard
              <ArrowRight className='w-6 h-6 text-purple-400' />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
