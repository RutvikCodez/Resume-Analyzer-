import AnalyzerDeepDive from "@/components/AnalyzerDeepDive";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import MockInterviewPlatform from "@/components/MockInterviewPlatform";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Solution from "@/components/Solution";
import UseCases from "@/components/UseCases";

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
    </div>
  );
};

export default Page;
