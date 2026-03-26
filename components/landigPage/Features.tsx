import { features } from "@/constants";
import ProblemCard from "../reusable/ProblemCard";
import SecondaryWrapper from "../reusable/SecondaryWrapper";

const Features = () => {
  return (
    <SecondaryWrapper
      title="Powerful Features"
      desc="Everything you need to ace your job search"
      color="bg-secondary/30"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <ProblemCard key={idx} {...feature} />
        ))}
      </div>
    </SecondaryWrapper>
  );
};

export default Features;
