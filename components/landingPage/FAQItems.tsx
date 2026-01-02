import { FAQSectionGridData } from '@/constant'
import { ChevronRight } from 'lucide-react'
import React from 'react'

const FAQItems = () => {
  return (
    <div className='space-y-4'>
          {FAQSectionGridData.map((item, i) => (
            <details
              key={i}
              className='
            group p-6 rounded-2xl
            bg-neutral-900
            border border-white/10
            hover:border-purple-500/40
            hover:shadow-lg hover:shadow-purple-500/10
            transition-all duration-300
          '>
              <summary className='font-bold text-lg cursor-pointer flex items-center justify-between text-white'>
                <span>{item.q}</span>
                <ChevronRight className='w-5 h-5 text-purple-400 group-open:rotate-90 transition-transform' />
              </summary>

              <p className='mt-4 text-white/70 leading-relaxed'>{item.a}</p>
            </details>
          ))}
        </div>
  )
}

export default FAQItems
