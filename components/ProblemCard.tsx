import { Card } from "./ui/card";

const ProblemCard = ({ Icon, desc, title, ...props }: ProblemCardType) => {
  return (
    <Card
      className="p-6 border border-border hover:shadow-lg hover:shadow-primary/10 transition-all flex flex-col gap-2"
      {...props}
    >
      <div className="flex flex-col gap-4">
        <Icon className="w-8 h-8 text-primary" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{desc}</p>
    </Card>
  );
};

export default ProblemCard;
