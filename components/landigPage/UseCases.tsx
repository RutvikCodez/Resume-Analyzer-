import { usecases } from "@/constants";
import ProblemCard from "../reusable/ProblemCard";
import SecondaryWrapper from "../reusable/SecondaryWrapper";

const UseCases = () => {
  return (
    <SecondaryWrapper
      title="Who It's For"
      desc="Tailored for everyone on the job search journey"
      color="bg-secondary/30"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usecases.map((useCase, idx) => (
          <ProblemCard key={idx} {...useCase} />
        ))}
      </div>
    </SecondaryWrapper>
  );
};

export default UseCases;
