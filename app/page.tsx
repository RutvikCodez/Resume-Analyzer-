import AnalyzerDeepDive from "@/components/landigPage/AnalyzerDeepDive";
import CTA from "@/components/landigPage/CTA";
import FAQ from "@/components/landigPage/FAQ";
import Features from "@/components/landigPage/Features";
import Footer from "@/components/landigPage/Footer";
import Hero from "@/components/landigPage/Hero";
import MockInterviewPlatform from "@/components/landigPage/MockInterviewPlatform";
import Platform from "@/components/landigPage/Platform";
import Problem from "@/components/landigPage/Problem";
import Process from "@/components/landigPage/Process";
import Solution from "@/components/landigPage/Solution";
import UseCases from "@/components/landigPage/UseCases";
import WhyChooseUs from "@/components/landigPage/WhyChooseUs";

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
