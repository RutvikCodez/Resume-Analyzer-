import { services } from "@/constants";
import ServicesCard from "./ServicesCard";
import SecondaryWrapper from "./SecondaryWrapper";

const WhyChooseUs = () => {
  return (
    <SecondaryWrapper
      title="Why CareerForge AI"
      desc="The complete job search platform"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((item, idx) => (
          <ServicesCard key={idx} {...item} />
        ))}
      </div>
    </SecondaryWrapper>
  );
};

export default WhyChooseUs;
