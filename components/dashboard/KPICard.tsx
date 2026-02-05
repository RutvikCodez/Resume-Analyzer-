import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";

const KPICard = ({
  title,
  value,
  className,
  description,
  unit,
  ...props
}: KPICardProps) => {
  return (
    <Card
      className={cn(
        "bg-linear-to-br from-card via-card to-secondary/5 border-border/50 hover:border-primary/30 transition-all",
        className,
      )}
      {...props}
    >
      <CardHeader>
        <CardDescription className="text-xs uppercase tracking-wider text-muted-foreground">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-baseline gap-1">
          <div className="text-3xl font-bold text-foreground">{value}</div>
          <span className="text-sm text-muted-foreground">{unit}</span>
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default KPICard;
