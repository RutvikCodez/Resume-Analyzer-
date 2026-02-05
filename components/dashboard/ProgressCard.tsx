import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";

const ProgressCard = ({
  title,
  value,
  className,
  description,
  max = 100,
  ...props
}: ProgressCardProps) => {
  const percentage = (value / max) * 100;
  return (
    <Card
      className={cn(
        "bg-linear-to-br from-card to-secondary/5 border-border/50",
        className,
      )}
      {...props}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1 flex flex-col gap-1">
            <CardTitle className="text-base flex items-center gap-2">
              {title}
            </CardTitle>
            <CardDescription className="text-xs">{description}</CardDescription>
          </div>
          <Badge variant={"default"} className="text-xs">
            {percentage.toFixed(0)}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Progress value={percentage} className="h-2" />
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
