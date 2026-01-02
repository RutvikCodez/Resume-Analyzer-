import { interviewTypesGridGridData } from '@/constant'
import React from 'react'

const InterviewTypesGrid = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {interviewTypesGridGridData.map((type, i) => (
            <div
              key={i}
              className='
            group p-8 rounded-3xl
            bg-neutral-900
            border border-white/10
            hover:border-purple-500/40
            hover:shadow-xl hover:shadow-purple-500/10
            transition-all duration-500
            hover:scale-[1.03]
            cursor-pointer
          '>
              <div className='space-y-4'>
                {/* Icon */}
                <div
                  className='
                w-16 h-16 rounded-2xl
                bg-gradient-to-br from-purple-500/20 to-purple-500/5
                flex items-center justify-center
                group-hover:scale-110
                transition-transform duration-300
              '>
                  <type.icon className='w-8 h-8 text-purple-400' />
                </div>

                {/* Title */}
                <h3 className='text-2xl font-bold text-white group-hover:text-purple-400 transition-colors'>
                  {type.title}
                </h3>

                {/* Description */}
                <p className='text-white/70 leading-relaxed'>{type.desc}</p>
              </div>
            </div>
          ))}
        </div>
  )
}

export default InterviewTypesGrid
