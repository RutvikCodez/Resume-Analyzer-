import { platformData } from "@/constants";
import ProblemCard from "./ProblemCard";
import SecondaryWrapper from "./SecondaryWrapper";

const Platform = () => {
  return (
    // <section className="w-full py-20 bg-linear-to-br from-accent/5 to-primary/5">
    //   <div className="max-w-6xl mx-auto flex flex-col gap-16">
    //     <div className="text-center flex flex-col gap-4">
    //       <h2 className="text-4xl md:text-5xl font-bold text-pretty">
    //         Your Dashboard
    //       </h2>
    //       <p className="text-xl text-muted-foreground">
    //         Everything you need in one place
    //       </p>
    //     </div>

    // <div className="grid md:grid-cols-3 gap-6">
    //   {platformData.map((feature, idx) => (
    //     <ProblemCard key={idx} {...feature} />
    //   ))}
    // </div>
    //   </div>
    // </section>
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
