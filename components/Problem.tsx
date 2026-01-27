import { problmes } from "@/constants";
import ProblemCard from "./ProblemCard";

const Problem = () => {
  return (
    <section className="w-full py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-pretty">
            Why Job Seekers Struggle
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real challenges that cost you opportunities—we fix them all
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problmes.map((item, idx) => (
            <ProblemCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
