import { howItWorkSectionGridData } from '@/constant'
import { ChevronRight } from 'lucide-react'
import React from 'react'

const HowItWorkSection = () => {
  return (
    <section className='py-24 px-4 sm:px-6 lg:px-8 bg-black'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-20 space-y-4'>
          <div className='inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4'>
            <span className='text-sm font-medium text-purple-400'>
              Simple Process
            </span>
          </div>

          <h2 className='text-5xl md:text-6xl font-bold'>
            <span className='text-white'>Get Started in </span>
            <span className='bg-gradient-to-b from-white to-purple-400 bg-clip-text text-transparent'>
              Minutes
            </span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {howItWorkSectionGridData.map((item, i) => (
            <div key={i} className='relative group'>
              {/* Card */}
              <div
                className='
              space-y-6 p-8 rounded-3xl
              bg-neutral-900
              border border-white/10
              hover:border-purple-500/40
              hover:shadow-xl hover:shadow-purple-500/10
              transition-all duration-500
              hover:scale-[1.03]
            '>
                {/* Step Number */}
                <div className='text-6xl font-bold text-purple-500/20 group-hover:text-purple-500/40 transition-colors'>
                  {item.step}
                </div>

                {/* Icon */}
                <div className='w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center'>
                  <item.icon className='w-7 h-7 text-purple-400' />
                </div>

                {/* Content */}
                <div className='space-y-3'>
                  <h3 className='text-2xl font-bold text-white'>
                    {item.title}
                  </h3>

                  <p className='text-white/70 leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Arrow (Desktop only) */}
              {i < 3 && (
                <div className='hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20'>
                  <ChevronRight className='w-8 h-8 text-purple-500/30' />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorkSection
