import { Card } from "./ui/card";
import { interviewFeatures, metrics } from "@/constants";
import MetricsCard from "./MetricsCard";
import AnalyzerCard from "./AnalyzerCard";
import { Mic } from "lucide-react";

const MockInterviewPlatform = () => {
  return (
    <section className="w-full py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="p-8 border-2 border-accent/30 bg-linear-to-br from-accent/5 to-primary/5 order-2 md:order-1">
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-lg p-4 border border-border flex flex-col gap-4">
                <div className=" flex flex-col gap-2">
                  <h4 className="font-bold">Current Question:</h4>
                  <p className="text-sm text-muted-foreground">
                    &quot;Tell us about a time you overcame a technical
                    challenge&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded">
                  <div className="flex items-center justify-center rounded-full bg-primary/20">
                    <Mic className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">
                    Recording... 45 seconds
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-bold">Live Metrics:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {metrics.map((item, index) => (
                    <MetricsCard key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div className="order-1 md:order-2 flex flex-col gap-8">
            <div className=" flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl font-bold text-pretty">
                Mock Interview
                <br />
                Platform
              </h2>
              <p className="text-lg text-muted-foreground">
                Practice with AI that simulates real interviews and gives you
                detailed feedback on every answer.
              </p>
            </div>

            <div className=" flex flex-col gap-4">
              {interviewFeatures.map((item, index) => (
                <AnalyzerCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockInterviewPlatform;
