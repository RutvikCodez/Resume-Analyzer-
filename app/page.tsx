import AnalyzerDeepDive from "@/components/AnalyzerDeepDive";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import MockInterviewPlatform from "@/components/MockInterviewPlatform";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";

const Page = () => {
  return (
    <div className="w-full bg-background text-foreground">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <AnalyzerDeepDive />
      <MockInterviewPlatform />
    </div>
  );
};

export default Page;
