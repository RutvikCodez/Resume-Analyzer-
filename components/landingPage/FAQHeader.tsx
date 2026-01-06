import React from 'react'

const FAQHeader = () => {
  return (
    <div className='text-center mb-20 space-y-4'>
      <div className='inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4'>
        <span className='text-sm font-medium text-purple-400'>FAQ</span>
      </div>

      <h2 className='text-5xl md:text-6xl font-bold'>
        <span className='text-white'>Got </span>
        <span className='bg-linear-to-b from-white to-purple-400 bg-clip-text text-transparent'>
          Questions?
        </span>
      </h2>
    </div>
  )
}

export default FAQHeader
