import { howItWorkSectionGridData } from '@/constant'
import { ChevronRight } from 'lucide-react'
import React from 'react'

const HowItWorkSection = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24 space-y-5">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <span className="text-sm font-medium text-purple-400">
              Simple Process
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold">
            <span className="text-white">Get Started in </span>
            <span className="bg-gradient-to-b from-white to-purple-400 bg-clip-text text-transparent">
              Minutes
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {howItWorkSectionGridData.map((item, i) => (
            <div key={i} className="relative group">

              {/* Card */}
              <div
                className="
                  relative p-8 rounded-3xl
                  bg-white/[0.035]
                  backdrop-blur-xl
                  border border-white/10
                  hover:border-purple-500/40
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:shadow-2xl hover:shadow-purple-500/10
                "
              >
                {/* Step */}
                <div className="text-5xl font-extrabold text-purple-500/20 mb-2">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-purple-500/15 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-purple-400" />
                </div>

                {/* Text */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-5 -translate-y-1/2 z-20">
                  <ChevronRight className="w-8 h-8 text-purple-500/30" />
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
