'use client'

import { FAQSectionGridData } from '@/constant'
import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

const FAQItems = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {FAQSectionGridData.map((item, i) => {
        const isOpen = openIndex === i

        return (
          <div
            key={i}
            className="
              rounded-2xl bg-neutral-900
              border border-white/10
              hover:border-purple-500/40
              transition-all duration-300
            "
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="
                w-full p-6
                flex items-center justify-between
                text-left text-lg font-semibold text-white
              "
            >
              {item.q}
              <ChevronRight
                className={`
                  w-5 h-5 text-purple-400
                  transition-transform duration-300
                  ${isOpen ? 'rotate-90' : ''}
                `}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-6 text-white/70 animate-fadeIn">
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default FAQItems
