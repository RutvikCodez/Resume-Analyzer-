import FAQSection from '@/components/landingPage/FAQSection'
import FinalCTA from '@/components/landingPage/FinalCTA'
import HeroSection from '@/components/landingPage/HeroSection'
import HowItWorkSection from '@/components/landingPage/HowItWorkSection'
import InterviewTypesSection from '@/components/landingPage/InterviewTypesSection'
import InterviewTypesGrid from '@/components/landingPage/InterviewTypesSection'
import WhyChooseUs from '@/components/landingPage/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <HowItWorkSection />
      <InterviewTypesSection />
      <FAQSection />
      <FinalCTA />
    </div>
  )
}

export default page
