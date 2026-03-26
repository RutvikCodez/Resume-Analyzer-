import { Shield } from "lucide-react";
import CTAButton from "./CTAButton";

const CTA = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl md:text-6xl font-bold text-pretty">
              Your Dream Job{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                is One Resume Away
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Start your free resume analysis today. No credit card required.
            </p>
          </div>

          <div className="flex justify-center">
            <CTAButton />
          </div>
        </div>

        <p className="text-sm text-muted-foreground flex gap-2 justify-center items-center">
          <Shield className="inline" />
          Your data is safe and secure. We never share your information.
        </p>
      </div>
    </section>
  );
};

export default CTA;
