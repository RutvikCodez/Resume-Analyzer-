import { Progress } from "../ui/progress";

const SkillCard = ({ name, percentage, ...props }: SkillProficiency) => {
  return (
    <div className="flex flex-col gap-2" {...props}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{percentage}%</span>
      </div>
      <Progress
        value={percentage}
        id="progress-upload"
        className="h-2 bg-muted [&>div]:bg-primary"
      />
    </div>
  );
};

export default SkillCard;
