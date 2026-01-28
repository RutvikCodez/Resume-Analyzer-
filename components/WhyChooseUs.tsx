import { services } from "@/constants";
import ServicesCard from "./ServicesCard";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-pretty">
            Why CareerForge AI
          </h2>
          <p className="text-xl text-muted-foreground">
            The complete job search platform
          </p>
        </div>

        <div className="wgrid md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <ServicesCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
