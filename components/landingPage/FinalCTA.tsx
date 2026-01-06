import { ArrowRight, Zap } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

const FinalCTA = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/30 rounded-full blur-[200px] pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        
        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white">
          Ready to{' '}
          <span className="bg-gradient-to-b from-white to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]">
            Crush
          </span>
          <br />
          Your Next Interview?
        </h2>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
          Join <span className="text-white font-semibold">50,000+</span>{' '}
          candidates who landed their dream jobs using our AI-powered interview platform.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          
          {/* Primary CTA */}
          <Button
            className="
              group px-12 py-6
              bg-gradient-to-r from-purple-600 to-fuchsia-600
              text-white rounded-2xl font-bold text-xl
              shadow-[0_25px_80px_rgba(168,85,247,0.45)]
              hover:scale-[1.06]
              transition-all duration-300
              flex items-center gap-3
            "
          >
            Start Free Trial
            <Zap className="w-6 h-6 transition-transform group-hover:rotate-12" />
          </Button>

          {/* Secondary CTA */}
          <Link href="/dashboard">
            <Button
              className="
                px-12 py-6
                bg-neutral-900/60 backdrop-blur-md
                border border-white/10
                rounded-2xl font-bold text-xl
                text-white
                hover:border-purple-500/40
                hover:scale-[1.05]
                transition-all duration-300
                flex items-center gap-3
              "
            >
              View Dashboard
              <ArrowRight className="w-6 h-6 text-purple-400" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
