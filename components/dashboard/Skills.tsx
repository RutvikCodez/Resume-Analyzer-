import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SkillCard from "./SkillCard";

const Skills = ({
  skillProficiency,
}: {
  skillProficiency: SkillProficiency[];
}) => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-base">Skill Proficiency</CardTitle>
        <CardDescription>Based on resume skill strength</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 h-96 overflow-y-auto no-scrollbar">
        {skillProficiency.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </CardContent>
    </Card>
  );
};

export default Skills;
