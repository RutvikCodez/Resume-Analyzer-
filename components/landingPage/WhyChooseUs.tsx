'use client'

import { featuresGridData } from '@/constant'
import { ChevronRight } from 'lucide-react'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className='py-24 px-4 sm:px-6 lg:px-8 bg-black'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-20 space-y-4'>
          <div className='inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20'>
            <span className='text-sm font-medium text-purple-400'>
              Why Choose Us
            </span>
          </div>

          <h2 className='text-5xl md:text-6xl font-bold leading-tight'>
            <span className='bg-gradient-to-b from-white to-purple-400 bg-clip-text text-transparent'>
              Everything You Need
            </span>
            <br />
            <span className='text-white'>to Succeed</span>
          </h2>

          <p className='text-lg text-white/70 max-w-2xl mx-auto'>
            Industry-leading AI interview platform with comprehensive features
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {featuresGridData.map((feature, i) => (
            <div
              key={i}
              className='
                group relative p-8 rounded-2xl
                bg-neutral-900
                border border-white/10
                hover:border-purple-500/40
                hover:shadow-xl hover:shadow-purple-500/10
                transition-all duration-500
                hover:scale-[1.03]
                cursor-pointer
                overflow-hidden
              '>
              {/* Gradient Overlay */}
              <div
                className='
                absolute inset-0
                bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              '
              />

              <div className='relative z-10 space-y-4'>
                {/* Icon */}
                <div
                  className='
                  w-14 h-14 rounded-xl
                  bg-purple-500/10
                  flex items-center justify-center
                  group-hover:bg-purple-500/20
                  group-hover:scale-110
                  transition-all duration-300
                '>
                  <feature.icon className='w-7 h-7 text-purple-400' />
                </div>

                {/* Title */}
                <h3 className='text-2xl font-bold text-white group-hover:text-purple-400 transition-colors'>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className='text-white/70 leading-relaxed'>
                  {feature.description}
                </p>

                {/* Learn More */}
                <div
                  className='
                  flex items-center text-purple-400
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                '>
                  <span className='text-sm font-semibold'>Learn more</span>
                  <ChevronRight className='w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
