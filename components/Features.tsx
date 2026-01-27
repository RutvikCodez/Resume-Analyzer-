import { features } from "@/constants";
import ProblemCard from "./ProblemCard";

const Features = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-pretty">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to ace your job search
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <ProblemCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
