import { faqs } from "@/constants";
import ProblemCard from "./ProblemCard";
import SecondaryWrapper from "./SecondaryWrapper";

const FAQ = () => {
  return (
    <SecondaryWrapper title="Frequently Asked Questions" desc="" color="bg-secondary/30">
      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <ProblemCard key={idx} {...faq} />
        ))}
      </div>
    </SecondaryWrapper>
  );
};

export default FAQ;
