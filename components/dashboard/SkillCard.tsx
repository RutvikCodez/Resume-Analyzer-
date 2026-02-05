import { Progress } from "../ui/progress";

const SkillCard = ({ tip, completion, ...props }: Tip) => {
  return (
    <div className="flex flex-col gap-2" {...props}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{tip}</span>
        <span className="text-xs text-muted-foreground">{completion}%</span>
      </div>
      <Progress
        value={completion}
        id="progress-upload"
        className="h-2 bg-muted [&>div]:bg-primary"
      />
    </div>
  );
};

export default SkillCard;
