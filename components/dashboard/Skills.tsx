import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SkillCard from "./SkillCard";

const Skills = ({
  skillsTips,
  skillScore,
}: {
  skillsTips: Tip[];
  skillScore: number;
}) => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-base">Skill Proficiency</CardTitle>
        <CardDescription>Based on resume skill strength</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {skillsTips.map((skill, i) => {
          const completion =
            skill.type === "good" ? skillScore : Math.max(skillScore - 15, 0);

          return <SkillCard key={i} {...skill} completion={completion} />;
        })}
      </CardContent>
    </Card>
  );
};

export default Skills;
