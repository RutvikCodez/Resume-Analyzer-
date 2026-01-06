import React from 'react'

const InterviewTypesHeader = () => {
  return (
    <div className="text-center mb-24 space-y-5">

      {/* Badge */}
      <div className="inline-flex items-center px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
        <span className="text-sm font-medium text-purple-400 tracking-wide">
          Interview Types
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
        <span className="text-white">Master </span>
        <span className="bg-linear-to-b from-white to-purple-400 bg-clip-text text-transparent">
          Every Round
        </span>
      </h2>

      {/* Optional Subtext (recommended) */}
      <p className="text-white/60 max-w-2xl mx-auto text-lg">
        Practice each interview stage with AI-driven simulations inspired by real hiring processes.
      </p>

    </div>
  )
}

export default InterviewTypesHeader
