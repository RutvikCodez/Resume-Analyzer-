import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import PieChartComponent from "./PieChartComponent";

const Summary = ({ feedback }: { feedback: AIResponse }) => {
  const categories = [
    { title: "Tone & Style", score: feedback.toneAndStyle.score },
    { title: "Content", score: feedback.content.score },
    { title: "Structure", score: feedback.structure.score },
    { title: "Skills", score: feedback.skills.score },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resume Performance Overview</CardTitle>
        <CardDescription>
          This chart shows how your resume performs across key areas like
          content, structure, skills, and tone.
        </CardDescription>
        <CardContent>
          <PieChartComponent
            height={300}
            data={categories}
            innerRadius={80}
            outerRadius={100}
            dataKey="score"
            nameKey="title"
            cornerRadius={50}
            paddingAngle={5}
          />
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default Summary;
