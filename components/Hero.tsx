import { stats } from "@/constants";
import { Button } from "./ui/button";
import StatsItem from "./StatsItem";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full border border-border w-fit">
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by 50,000+ job seekers • 95% interview success rate
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-pretty leading-tight">
            Land Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Dream Job
            </span>{" "}
            with AI
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Get AI-powered resume analysis, mock interviews, and personalized
            coaching to ace every interview and stand out to recruiters.
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold"
          >
            Analyze My Resume Free
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 border-border">
          {stats.map((item, index) => (
            <StatsItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
