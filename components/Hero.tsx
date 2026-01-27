import { ArrowRight, Mic } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-linear-to-br from-primary/20 to-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-linear-to-tr from-accent/15 to-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-secondary rounded-full border border-border">
          <span className="text-sm font-medium text-muted-foreground">
            Trusted by 50,000+ job seekers • 95% interview success rate
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-pretty leading-tight">
          Land Your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
            Dream Job
          </span>{" "}
          with AI
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto leading-relaxed">
          Get AI-powered resume analysis, mock interviews, and personalized
          coaching to ace every interview and stand out to recruiters.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold"
          >
            Analyze My Resume Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-lg font-semibold border-2 bg-transparent"
          >
            Start Mock Interview
            <Mic className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-border">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
              50K+
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              Active Users
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
              87%
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              ATS Score Improvement
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
              3x
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              Interview Success Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
