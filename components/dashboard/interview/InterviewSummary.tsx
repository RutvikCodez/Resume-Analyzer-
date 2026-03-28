import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { summaryPoints } from "@/constants";

const InterviewSummary = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Interview Summary</CardTitle>
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground flex flex-col gap-2">
        <p>
          Based on your input, a personalized mock interview has been generated.
        </p>

        <ul className="list-disc pl-5 flex flex-col gap-1">
          {summaryPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default InterviewSummary;