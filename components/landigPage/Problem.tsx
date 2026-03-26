import { problmes } from "@/constants";
import ProblemCard from "../reusable/ProblemCard";
import SecondaryWrapper from "../reusable/SecondaryWrapper";

const Problem = () => {
  return (
    <SecondaryWrapper
      title="Why Job Seekers Struggle"
      desc="Real challenges that cost you opportunities—we fix them all"
      color="bg-secondary/30"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problmes.map((item, idx) => (
          <ProblemCard key={idx} {...item} />
        ))}
      </div>
    </SecondaryWrapper>
  );
};

export default Problem;
