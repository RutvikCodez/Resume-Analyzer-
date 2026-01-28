import { platformData } from "@/constants";
import ProblemCard from "./ProblemCard";
import SecondaryWrapper from "./SecondaryWrapper";

const Platform = () => {
  return (
    <SecondaryWrapper
      title="Your Dashboard"
      desc="Everything you need in one place"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {platformData.map((feature, idx) => (
          <ProblemCard key={idx} {...feature} />
        ))}
      </div>
    </SecondaryWrapper>
  );
};

export default Platform;
