import React from 'react'
import FAQItems from './FAQItems'
import FAQHeader from './FAQHeader'

const FAQSection = () => {
  return (
    <section className='py-24 px-4 sm:px-6 lg:px-8 bg-black relative'>
      <div className='max-w-4xl mx-auto'>
        <FAQHeader />
        <FAQItems />
      </div>
    </section>
  )
}

export default FAQSection
