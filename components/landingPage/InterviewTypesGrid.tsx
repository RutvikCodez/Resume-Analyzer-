import { interviewTypesGridGridData } from '@/constant'
import React from 'react'

const InterviewTypesGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {interviewTypesGridGridData.map((type, i) => (
        <div
          key={i}
          className="
            group relative p-8 rounded-3xl
            bg-white/[0.035]
            backdrop-blur-xl
            border border-white/10
            hover:border-purple-500/40
            transition-all duration-500
            hover:-translate-y-1
            hover:shadow-2xl hover:shadow-purple-500/10
            cursor-pointer
          "
        >
          {/* subtle glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative z-10 space-y-5">
            {/* Icon */}
            <div
              className="
                w-16 h-16 rounded-2xl
                bg-purple-500/15
                flex items-center justify-center
                group-hover:scale-110
                transition-transform duration-300
              "
            >
              <type.icon className="w-8 h-8 text-purple-400" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              {type.title}
            </h3>

            {/* Description */}
            <p className="text-white/65 leading-relaxed">
              {type.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default InterviewTypesGrid
