import AnalyzerDeepDive from "@/components/AnalyzerDeepDive";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MockInterviewPlatform from "@/components/MockInterviewPlatform";
import Platform from "@/components/Platform";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Solution from "@/components/Solution";
import UseCases from "@/components/UseCases";
import WhyChooseUs from "@/components/WhyChooseUs";

const Page = () => {
  return (
    <div className="w-full bg-background text-foreground">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <AnalyzerDeepDive />
      <MockInterviewPlatform />
      <Process />
      <UseCases />
      <WhyChooseUs />
      <Platform />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Page;
