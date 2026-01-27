import { Check } from "lucide-react";

const SolutionCard = ({
  Icon,
  desc,
  points,
  title,
  ...props
}: SolutionCardType) => {
  return (
    <div className="flex gap-4" {...props}>
      <div className="shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
          <Icon className="text-primary" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{desc}</p>
        </div>
        <ul className="flex flex-col gap-2">
          {points.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="text-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SolutionCard;
