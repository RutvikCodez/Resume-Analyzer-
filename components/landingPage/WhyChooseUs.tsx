'use client'

import { featuresGridData } from '@/constant'
import { ChevronRight } from 'lucide-react'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24 space-y-5">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <span className="text-sm font-medium text-purple-400">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-b from-white to-purple-400 bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="text-white">to Succeed</span>
          </h2>

          <p className="text-lg text-white/65 max-w-2xl mx-auto">
            A real-world AI interview platform built to simulate
            modern hiring pipelines used by top tech companies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresGridData.map((feature, i) => (
            <div
              key={i}
              className="
                group relative p-8 rounded-3xl
                bg-white/[0.03]
                backdrop-blur-xl
                border border-white/10
                hover:border-purple-500/40
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-2xl hover:shadow-purple-500/10
                overflow-hidden
              "
            >
              {/* Glow Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br from-purple-600/15 via-purple-600/5 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
              />

              <div className="relative z-10 space-y-5">
                {/* Icon */}
                <div
                  className="
                    w-14 h-14 rounded-2xl
                    bg-purple-500/15
                    flex items-center justify-center
                    group-hover:bg-purple-500/25
                    transition-all duration-300
                  "
                >
                  <feature.icon className="w-7 h-7 text-purple-400" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/65 leading-relaxed">
                  {feature.description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
