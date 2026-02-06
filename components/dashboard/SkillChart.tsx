import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import PieChartComponent from "./PieChartComponent";

const SkillChart = ({
  skillProficiency,
}: {
  skillProficiency: SkillProficiency[];
}) => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-base">Skill Distribution</CardTitle>
        <CardDescription>Your technical strengths</CardDescription>
      </CardHeader>
      <CardContent>
        <PieChartComponent
          data={skillProficiency}
          height={400}
          outerRadius={100}
          dataKey="percentage"
          nameKey="name"
        />
      </CardContent>
    </Card>
  );
};

export default SkillChart;
