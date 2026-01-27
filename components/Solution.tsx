import { solution } from "@/constants";
import SolutionCard from "./SolutionCard";

const Solution = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-pretty">
            How CareerForge AI Fixes This
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI + Expert coaching combined to transform your job search
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {solution.map((item, index) => (
            <SolutionCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
