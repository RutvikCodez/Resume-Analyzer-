import { processSteps } from "@/constants";
import StepCard from "./StepCard";
import SecondaryWrapper from "./SecondaryWrapper";

const Process = () => {
  return (
    <SecondaryWrapper
      title="How It Works"
      desc="Your step-by-step path to interview success"
    >
      <div className=" flex flex-col gap-8">
        {processSteps.map((item, idx) => (
          <StepCard key={idx} step={idx} {...item} />
        ))}
      </div>
    </SecondaryWrapper>
  );
};

export default Process;
