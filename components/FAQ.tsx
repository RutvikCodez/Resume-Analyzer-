import { faqs } from "@/constants";
import ProblemCard from "./ProblemCard";

const FAQ = () => {
  return (
    <section className="w-full py-20 bg-secondary/30">
      <div className="max-w-3xl mx-auto flex flex-col gap-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-pretty">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <ProblemCard key={idx} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
