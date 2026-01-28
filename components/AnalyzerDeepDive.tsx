import { Card } from "./ui/card";
import { analyzerData, suggestions } from "@/constants";
import PointsItem from "./PointsItem";
import SolutionCard from "./SolutionCard";
import SecondaryWrapper from "./SecondaryWrapper";
import { Field, FieldLabel } from "./ui/field";
import { Progress } from "./ui/progress";


const AnalyzerDeepDive = () => {
  return (
    <SecondaryWrapper
      title="Resume Analyzer Powered by AI"
      desc="Upload your resume and get instant insights on how recruiters
             and ATS systems see it."
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4">
          {analyzerData.map((item, index) => (
            <SolutionCard key={index} {...item} />
          ))}
        </div>

        <Card className="p-8 border-2 border-primary/30 bg-linear-to-br from-primary/5 to-accent/5">
          <div className=" flex flex-col gap-6">
            <Field className="bg-background rounded-lg p-4 border border-border flex flex-col gap-2">
              <FieldLabel htmlFor="progress-upload" className="flex justify-between items-center">
                <span className="font-bold">Upload progress</span>
                <span className="text-3xl font-bold text-primary">87%</span>
              </FieldLabel>
              <Progress value={87} id="progress-upload"   className="h-2 bg-muted [&>div]:bg-primary" />
            </Field>

            <div className=" flex flex-col gap-3">
              <h4 className="font-bold">Top Recommendations:</h4>
              <div className=" flex flex-col gap-2">
                {suggestions.map((item, index) => (
                  <PointsItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </SecondaryWrapper>
  );
};

export default AnalyzerDeepDive;
