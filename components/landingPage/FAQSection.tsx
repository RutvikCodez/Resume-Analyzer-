import React from 'react'
import FAQItems from './FAQItems'
import FAQHeader from './FAQHeader'

const FAQSection = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-125 h-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <FAQHeader />
        <FAQItems />
      </div>

    </section>
  )
}

export default FAQSection
