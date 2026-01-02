import InterviewTypesHeader from './InterviewTypesHeader'
import InterviewTypesGrid from './InterviewTypesGrid'

const InterviewTypesSection = () => {
  return (
    <section className='py-24 px-4 sm:px-6 lg:px-8 bg-black'>
      <div className='max-w-7xl mx-auto'>
        <InterviewTypesHeader />
        <InterviewTypesGrid />
      </div>
    </section>
  )
}

export default InterviewTypesSection
