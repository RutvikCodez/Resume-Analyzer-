import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Category from "./Category";
import ScoreCircle from "./ScoreCircle";

const Summary = ({ feedback }: { feedback: AIResponse }) => {
  const categories = [
    { title: "Tone & Style", score: feedback.toneAndStyle.score },
    { title: "Content", score: feedback.content.score },
    { title: "Structure", score: feedback.structure.score },
    { title: "Skills", score: feedback.skills.score },
  ];
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center">
        <ScoreCircle score={feedback.overallScore} />
        <div className="flex flex-col gap-2">
          <CardTitle className="text-2xl font-bold">
            Your Resume Score
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">
            This score is calculated based on the variables listed below.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {categories.map((category, index) => (
          <Category key={index} {...category} />
        ))}
      </CardContent>
    </Card>
  );
};

export default Summary;
