import { processSteps } from "@/constants";
import StepCard from "./StepCard";

const Process = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-pretty">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Your step-by-step path to interview success
          </p>
        </div>

        <div className=" flex flex-col gap-8">
          {processSteps.map((item, idx) => (
            <StepCard key={idx} step={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
