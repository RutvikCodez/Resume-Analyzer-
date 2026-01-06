import InterviewTypesHeader from './InterviewTypesHeader'
import InterviewTypesGrid from './InterviewTypesGrid'

const InterviewTypesSection = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8">
      {/* Soft background wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <InterviewTypesHeader />
        <InterviewTypesGrid />
      </div>
    </section>
  )
}

export default InterviewTypesSection
