import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";

const Page = () => {
  return <div className="w-full bg-background text-foreground">
    <Hero />
    <Problem />
    <Solution />
    <Features />
  </div>;
};

export default Page;
