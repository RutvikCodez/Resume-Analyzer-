import { solution } from "@/constants";
import SolutionCard from "./SolutionCard";
import SecondaryWrapper from "./SecondaryWrapper";

const Solution = () => {
  return (
    <SecondaryWrapper
      title="How CareerForge AI Fixes This"
      desc="AI + Expert coaching combined to transform your job search"
    >
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {solution.map((item, index) => (
          <SolutionCard key={index} {...item} />
        ))}
      </div>
    </SecondaryWrapper>
  );
};

export default Solution;
