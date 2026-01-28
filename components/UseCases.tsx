import { usecases } from "@/constants";
import ProblemCard from "./ProblemCard";

const UseCases = () => {
  return (
    <section className="w-full py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-pretty">
            Who It&apos;s For
          </h2>
          <p className="text-xl text-muted-foreground">
            Tailored for everyone on the job search journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usecases.map((useCase, idx) => (
            <ProblemCard key={idx} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
